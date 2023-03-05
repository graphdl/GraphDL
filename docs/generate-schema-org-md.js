const schemaTypes = require('./data/schema.org.types.json')
const schemaProperties = require('./data/schema.org.properties.json')
const fs = require('fs')


// Generate Markdown for each Property

for (const schema of schemaProperties) {
  const name = schema.label === 'Action' ? schema.label : schema.label.replace('Action', '')
  const md = `import Link from 'next/link'
  
import Grid from '@components/Grid'

# ${name}

${schema.comment?.replace('<a class=\"localLink\"','<Link').replace('</a>','</Link>')}

## Property of



`
  const _type = schema.label.match(/..+Action$/) ? 'Verbs' : 'Nouns'
  fs.writeFileSync(`./pages/Properties/Schema.org/${name}.md`, md)
}


// Generate Markdown for each Type - Noun or Verb

for (const schema of schemaTypes) {
  const name = schema.label === 'Action' ? schema.label : schema.label.replace('Action', '')
  const md = `import Link from 'next/link'

# ${name}

${schema.comment?.replace('<a class=\"localLink\"','<Link').replace('</a>','</Link>')}

## Properties

<Grid>
${schema.properties.split(', ').map(property => {
  const prop = property.replace('https://schema.org/','')
  return `* [${prop}](/Properties/Schema.org/${prop})\n`
})}
</Grid>

`
  const _type = schema.label.match(/..+Action$/) ? 'Verbs' : 'Nouns'
  fs.writeFileSync(`./pages/${_type}/Schema.org/${name}.md`, md)
}