import { $Context } from './types'

export const Graph = ($: $Context): Promise<$Context> => {
  return Promise.resolve($)
}
