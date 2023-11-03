import { $Context, Graph, Noun, Property, SimpleGraph, Things } from '.'

export type InitFunction<Nouns extends string = string, Verbs extends string = string> = ($: $Context<Nouns, Verbs>) => Promise<$Context<Nouns, Verbs>>

export type GraphInput<Nouns extends string = string, Verbs extends string = string> = Graph<Nouns, Verbs> | Record<Nouns, NounInput<Nouns, Verbs>>

export type NounInput<Nouns extends string = string, Verbs extends string = string> = Noun<Nouns, Verbs> | Record<Nouns, PropertyInput>

export type PropertyInput<Nouns extends string = string, Verbs extends string = string, Properties extends string = string> = Property<Nouns, Verbs, Properties> //| Record<Properties, PropertyNames>


export function createGraph<Nouns extends Record<string, Things | keyof Nouns | Array<Things | keyof Nouns>>, Verbs extends Partial<Record<keyof Nouns, Record<string, keyof Nouns | Array<keyof Nouns >>>>>({ nouns, verbs }: 
  { nouns: Nouns, verbs?: Verbs }): { nouns: Nouns, verbs?: Verbs } {
  return { nouns, verbs }
}

  const $: $Context = {
    nouns: {},
    verbs: {},

  }

  // let graph = typeof init === 'function' ? await init($) : init

  // if (!graph.nouns) graph.nouns = {}
  // if (!graph.verbs) graph.verbs = {}
  
  // return Promise.resolve(graph)
// }




// export const simpleGraph = createGraph(async $ => $)

const example = createGraph({
  nouns: {
    Company: 'Organization',
    Contacts: 'Person',
    Customer: ['Company', 'Person'],
    Deal: 'SellAction',
    Product: 'Product',
    Service: 'Service',
    Price: 'PriceSpecification',
    SalesPerson: 'Person',
  },
  verbs: {
    Company: {
      employs: 'Contacts',
      needs: ['Product','Service'],
      buys: 'Deal'
    },
    Deal: {
      has: 'Price',
      includes: 'Product'
    },
    SalesPerson: {
      sells: 'Deal'
    }
  }
})