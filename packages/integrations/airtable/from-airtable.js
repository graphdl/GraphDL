// Usage: node from-airtable.js baseName > schema.graphql
// Requires fetch so node 18+ required

import yaml from 'js-yaml'

// Process the args from the command line
const baseName = process.argv[2]

const schema = await fetch(`https://airtable.vin/${baseName}/schema`, {
  headers: {
    Authorization: `${process.env.VIN_UNIVERSE_KEY}`
  }
}).then(res => res.json())

const tables = schema.tables

const definitions = {}

const camelCase = (str) => {
  return str
  if (!str) {
    return str
  }

  // If its all caps, ignore
  if (str === str.toUpperCase()) {
    return str
  }

  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '')
}

const tableIdToName = (id) => {
  return tables.find(table => table.id === id).name
}

const fieldIdToName = (tableId, id) => {
  return camelCase(tables.find(table => table.id === tableId).fields.find(field => field.id === id)?.name || 'unknownfield')
}

const processFormula = (tableId, formula) => {
  // A formula looks like {fldmDm1n8ap10qHxb} & ' ' & {fldOUMHYI3xFJQxL1} & ' ' & LEFT({fldO3XskDPWlKLScA}, 15)
  // However, we want to replace these field IDs with the camelCase name of the field
  // So we need to find the field ID, then replace it with the name

  // First, find all the field IDs
  const fieldIds = formula.match(/{fld.*?}/g)

  if (!fieldIds) {
    return formula
  }

  // Then, replace them with the field name
  for (const fieldId of fieldIds) {
    const fieldName = fieldIdToName(tableId, fieldId.replace('{','').replace('}',''))
    formula = formula.replace(fieldId, `{${fieldName}}`)
  }

  return formula
}

const processType = (tableId, field) => {
  switch (field.type) {
    case 'number':
      return 'integer'
    case 'multipleRecordLinks':
      // We need to return an array of [ ${table}->${targetField} ]
      return `[${ tableIdToName(field.options.linkedTableId) }->${ fieldIdToName(field.options.linkedTableId, field.options.inverseLinkFieldId) }]`
    case 'checkbox':
      return 'boolean'
    case 'formula':
      return `string = formula(${processFormula(tableId, field.options.formula)})`
    case 'multipleSelects':
      // choice 1 | choice 2 | choice 3
      return field.options.choices.map(choice => choice.name).join(' | ')
    case 'multipleLookupValues':
      // Get the target table by looking up the target field
      const targetField = tables.find(x => x.id == tableId).fields.find(x => x.id == field.options.recordLinkFieldId)

      // Guard rails, this thing is complex
      if (!targetField) {
        return `lookup(Error: cannot resolve field ${field.options.recordLinkFieldId})`
      }

      const targetTable = tables.find(x => x.id == targetField.options.linkedTableId)

      if (!targetTable) {
        return `lookup(Error: cannot resolve table ${targetField.options.linkedTableId})`
      }

      return `lookup(${ fieldIdToName(tableId, field.options.recordLinkFieldId) }->${tableIdToName(targetTable.id)}.${fieldIdToName(targetTable.id, field.options.fieldIdInLinkedTable)})`
    default:
      return 'string'
  }
}

for (const table of tables) {
  const output = {}

  for (const field of table.fields) {
    output[camelCase(field.name)] = processType(table.id, field)
  }

  definitions[table.name] = output
}

let output = yaml.dump(definitions)

// Convert leads: '[Leads->messages]' to just leads: [Leads->messages]
// But only if its an array like this, not a string like "status & ' ' & leads & ' ' & LEFT(message, 15)"
// So we cant nuke every instance of '.

const regex = /(\w+): '\[(.*?)\]'/g

output = output.replace(regex, '$1: [$2]')

console.log(output)