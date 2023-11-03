import { $Context, Graph, GraphOptionalVerbs, Noun, Property } from '.'

export type InitFunction<Nouns extends string = string, Verbs extends string = string> = ($: $Context<Nouns, Verbs>) => Promise<$Context<Nouns, Verbs>>

export type GraphInput<Nouns extends string = string, Verbs extends string = string> = GraphOptionalVerbs<Nouns, Verbs> | Record<Nouns, NounInput<Nouns, Verbs>>

export type NounInput<Nouns extends string = string, Verbs extends string = string> = Noun<Nouns, Verbs> | Record<Nouns, PropertyInput>

export type PropertyInput<Nouns extends string = string, Verbs extends string = string, Properties extends string = string> = Property<Nouns, Verbs, Properties> //| Record<Properties, PropertyNames>


export const createGraph = async (init: Graph | InitFunction) => {


  const $: $Context = {
    nouns: {},
    verbs: {},

  }

  let graph = typeof init === 'function' ? await init($) : init

  if (!graph.nouns) graph.nouns = {}
  if (!graph.verbs) graph.verbs = {}
  
  return Promise.resolve(graph)
}




export const simpleGraph = createGraph(async $ => $)