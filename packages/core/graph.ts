import { Things, SchemaActions, Prepositions, ThingProperties,  } from './schema'
import type { NounFields, NounProperties } from './properties'
import { App, Docs, Site, Brand, NounViews, Story } from './ui'
import { API, Data } from './api'
import { stringify } from './utils'
import { Machines } from './state'

export const createGraph = <G extends Graph<G>>(graph: Nouns<G> | { nouns: Nouns<G> } & Partial<G>) => {
  const fullGraph = (graph as Graph).nouns ? graph : { nouns: graph }
  fullGraph.toString = () => stringify(graph)
  return fullGraph as Graph<G>
}

export type Graph<G extends Graph<G> = DefaultGraph> = {
  nouns: Nouns<G>
  verbs: Partial<Verbs<G>>
  actions: Partial<Actions<G>>
  triggers: Partial<Triggers<G>>
  events: Partial<Events<G>>
  plurals: Partial<Plurals<G>>
  properties: Partial<NounProperties<G>>
  machines: Partial<Machines<G>>
  fields: Partial<NounFields<G>>
  views: Partial<NounViews<G>>
  app: Partial<App<G>>
  api: Partial<API<G>>
  site: Partial<Site<G>>
  admin: Partial<App<G>>
  docs: Partial<Docs<G>>
  db: Partial<Data<G>>
  brand: Partial<Brand<G>>
  story: Partial<Story<G>>
}
// export type NounsOrThings<G extends Graph<G>> = Things | Nouns<G>
export type Noun<G extends Graph<G>> = Things | keyof G['nouns'] // | Array<keyof G['nouns'] | Things>
export type NounModule<G extends Graph<G>> = {
  [P in 'is' | Prepositions]: Things | keyof G['nouns'] // Noun<G>
} & {
  is: Things //| keyof G['nouns']
} 
  // [P in 'is' & (Prepositions | ThingProperties)]: PluralAndOptionalNouns<G> | PluralAndOptionalNouns<G>[]
// }
export type Nouns<G extends Graph<G>> = {
  [N in string]: Things | ({ is: Things } | { [P in Prepositions]: Things }) 
  // [N in string]: Things | NounModule<G>
  // [N in keyof G['nouns']]: NounModule<G> | Noun<G>
  // [N in keyof G['nouns']]: Things // Noun<G> | NounModule<G>
  // [N in keyof G['nouns']]: G['nouns'][N] extends NounModule<G> ? NounModule<G> : Noun<G>
}

export type Verb<G extends Graph<G>> = {
  [V in PresentTense]: keyof G['nouns'] | Partial<DirectObject<G>>
}

export type DirectObject<G extends Graph<G>> = {
  [N in keyof G['nouns']]:  Partial<{
    [P in Prepositions]: OptionalNouns<G>
  }>
}

export type Verbs<G extends Graph<G>> = {
  [N in keyof G['nouns']]: Partial<Verb<G>>
}

export type IsPlural<K> = K extends `${infer Base}s` ? K : never
export type Pluralize<K> = K extends `${infer Base}s` ? K : never
export type Plurals<G extends Graph<G>> = Record<keyof G['nouns'], string>

export type PluralAndOptionalNouns<G extends Graph<G>> = PluralNouns<G> | OptionalNouns<G>
export type PluralNouns<G extends Graph<G>> = Noun<G> extends string ? `${Noun<G>}s` : never
export type OptionalNoun<G extends Graph<G>> = Noun<G> extends string ? Noun<G> | `${Noun<G>}?` : never
export type OptionalNouns<G extends Graph<G>> = OptionalNoun<G> | `[${OptionalNoun<G>}]` | OptionalNoun<G>[]
export type PastTense = `${string}ed`
export type PresentTense = `${string}s`
export type ActiveTense = `${string}ing`
export type IsPresentTense<K> = K extends `${infer Base}s` ? K : never
export type IsPastTense<K> = K extends `${infer Base}ed` ? K : never
export type IsActiveTense<K> = K extends `${infer Base}ing` ? K : never
export type ToAction<V extends string> = V extends `${infer A}s` ? A : never
export type ToActivity<V extends string> = V extends `${infer A}s` ? `${A}ing` : never
export type ToEvent<V extends string> = V extends `${infer A}s` ? `${A}ed` : never

export type Trigger<G extends Graph<G>, S extends Noun<G>, V extends `${string}ing`, N extends Noun<G>> = ($: $Context<G>) => any
export type Action<G extends Graph<G>, S extends Noun<G>, V extends PresentTense, O extends Noun<G>> = ($: $Context<G>) => any
export type Event<G extends Graph<G>, S extends Noun<G>, V extends PastTense, O extends Noun<G>> = ($: $Context<G>) => any

export type Triggers<G extends Graph<G>> = {
  [S in keyof G['nouns']]: {
    [V in keyof G['verbs'][S] as ToActivity<Extract<V, string>>]: {
      [O in keyof G['nouns']]: Trigger<G, S, ToActivity<Extract<V, string>>, O>
    }
  }
}

export type Actions<G extends Graph<G>> = {
  [S in keyof G['nouns']]: {
    [K in keyof G['verbs'][S]]: K extends IsPresentTense<K> ? {
      [O in keyof G['nouns']]: Action<G, S, K, O>
    } : never
  }
}

export type Events<G extends Graph<G>> = {
  [S in keyof G['nouns']]: {
    [K in keyof G['verbs'][S] as IsPastTense<ToEvent<Extract<K, string>>>]: {
      [O in keyof G['nouns']]: Event<G, S, ToEvent<Extract<K, string>>, O>
    }
  }
}





export type $Context<G extends Graph<G>> = G & {
  // db: Database<G>
  // user: User<G>
  // resource: Resource<G>
  // property: Property<G>
  // 巛: Actions<G> | Events<G> | Stream<G>
  // 彡: Database<G>
  // 入: Actions<G> | Triggers<G> | Activities<G> | Events<G>
  // 只: User<G>
  // 口?: Resource<G>
  // _?: Property<G>
}


type DefaultGraph = {
  nouns: {
    User: { is: 'Person' },
    Tenant: { is: 'Organization' },
    Admin: { is: 'Person' },
  },
  verbs: {
    User: {
      Create: { is: 'Create' },
      Update: { is: 'Update' },
      Delete: { is: 'Delete' },
      Login: { is: 'Login' },
      Logout: { is: 'Logout' },
      Signup: { is: 'Signup' },
    },
    Tenant: {
      Create: { is: 'Create' },
      Update: { is: 'Update' },
      Delete: { is: 'Delete' },
    },
    Admin: {
      Create: { is: 'Create' },
      Update: { is: 'Update' },
      Delete: { is: 'Delete' },
    }
  },
  actions: {},
  triggers: {},
  events: {},
  machines: {},
  plurals: {},
  properties: {},
  fields: {},
  views: {},
  app: {},
  api: {},
  site: {},
  admin: {},
  docs: {},
  db: {},
  brand: {},
  story: {},
}