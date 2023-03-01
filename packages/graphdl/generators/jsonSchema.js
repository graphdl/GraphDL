export const generateJsonSchema = graph => {
  
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'https://graphdl.org/schema.json',
    title: 'GraphDL',
    description: 'GraphDL is a graph-based data language for describing data models and data relationships.',
    type: 'object',
    properties: {
      nouns: {
        type: 'object',
        properties: {
          ...graph.nouns.map(noun => ({
            [noun._id]: {
              type: 'object',
              properties: {
                ...noun.properties.map(property => ({
                  [property._id]: {
                    type: 'string',
                  }
                }))
              }
            }
          }))
        }
      }
    }
  }
}