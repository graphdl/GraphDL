const schemaTypes = require('./data/schema.org.types.json')
const schemaProperties = require('./data/schema.org.properties.json')
const fs = require('fs')


// Generate Markdown for each Property

for (const schema of schemaProperties) {
  const name = schema.label === 'Action' ? schema.label : schema.label.replace('Action', '')
  const md = `# ${name}

${schema.comment}

## Property of



`
  const _type = schema.label.match(/..+Action$/) ? 'Verbs' : 'Nouns'
  fs.writeFileSync(`./pages/Properties/Schema.org/${name}.mdx`, md)
}


// Generate Markdown for each Type - Noun or Verb

for (const schema of schemaTypes) {
  const name = schema.label === 'Action' ? schema.label : schema.label.replace('Action', '')
  const md = `# ${name}

${schema.comment}

## Properties

<Grid>
${schema.properties.split(', ').map(property => {
  const prop = property.replace('https://schema.org/','')
  return `* [${prop}](/Properties/Schema.org/${prop})\n`
})}
</Grid>

`
  const _type = schema.label.match(/..+Action$/) ? 'Verbs' : 'Nouns'
  fs.writeFileSync(`./pages/${_type}/Schema.org/${name}.mdx`, md)
}

// import Grid from '@components/Grid'
// import Link from 'next/link'
  
// ${schema.comment?.replace('<a class=\"localLink\"','<Link').replace('</a>','</Link>')}
