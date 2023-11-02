import { $Context, Graph } from '.'

export type createGraph<Nouns extends string = string, Verbs extends string = string> = ($: $Context<Nouns, Verbs>) => Promise<Graph<Nouns, Verbs>>

export const createGraph = async ($: $Context) => {
  
  return Promise.resolve($)
}