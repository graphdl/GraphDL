// Compose a graph from an array of layers of sub-graphs
export const compose = graphs => {

  // if layers are an object, convert to array of sub-graphs to compose
  let layers = isArray(graphs) ? graphs : Object.entries(graphs).map(([key, val]) => ({ _layer: slugify(key), ...val }))

  // sort the layers by _layer
  layers = sortBy(layers, '_layer')

  // compose the layers into a single graph
  return layers.reduce((graph, layer) => ({ ...graph, ...layer }), {})
}