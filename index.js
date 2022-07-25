const data = new Map()

const graphdl = {
  get: (id) => data.get(id),
  set: (id, value) => data.set(id, value),
  delete: (id) => data.delete(id),
}

export default graphdl
