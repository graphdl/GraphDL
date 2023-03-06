const schemas = require('./data/schema.org.json')
const { get } = require('lodash')

const graph = schemas['@graph']

const thing = graph.find(item => get(item, '@id') === 'schema:Thing')

const things = {}

const findChildren = (schema) => {
  if (!things[schema['@id']]) things[schema['@id']] = {}

  things[schema['@id']].children = graph.filter(item => get(item, 'rdfs:subClassOf.@id') === schema['@id'])
  things[schema['@id']].children.map(child => findChildren(child))
  console.log(schema)
}

findChildren(thing)
// things.map(thing => thing.children = graph.filter(item => get(item, 'rdfs:subClassOf.@id') === thing['@id']))

console.log(things)
