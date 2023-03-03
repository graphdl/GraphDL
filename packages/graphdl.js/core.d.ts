// ∵ GraphDL: GraphDL is a graph-based data language for describing data models and data relationships.

// 🜉 Graph:
//   nouns:          [Noun.graph]

// ■ Noun:
//   _id:            string = slugify(_name)
//   _icon:          string | url = ■
//   _name:          string = titleCase(_id)
//   _type:          string = Noun
//   _description:   markdown | html
//   _source:        url | [string] | [object]
//   _seed:          url | [string] | [object]
//   _visibility:    anonymous | public | tenant | user | admin = tenant
//   _graph:         Graph.nouns
//   ${property}:    Properties | `[${Properties}]` | `${Properties}!` | `${Nouns}` | `[${Nouns}]` | `${Nouns}.${property}` | `[${Nouns}.${property}]`

// ∷ Properties:     string | markdown | url | email | phone | date | time | datetime | timestamp | number | integer | currency | boolean | object


export type Graph = Noun & {
  nouns: {
    [noun: string]: Noun
  }
}

export type Noun = {
  _id: string
  _icon: string
  _name: string
  _type: string
  _description: string
  _source: URL | string[] | object[]
  _seed: URL | string[] | object[]
  _visibility: Visibility
  _graph: string
} & NounProperties

export type NounProperties = {
  [property: string]: Properties | `[${Properties}]` | `${Properties}!` | `${keyof Graph['nouns']}` | `[${keyof Graph['nouns']}]` | `${keyof Graph['nouns']}.${string}` | `[${keyof Graph['nouns']}.${string}]`  // TODO: Figure out how to validate keyof `Noun.property` 
}

export type Properties = 'string' | 'markdown' | 'url' | 'email' | 'phone' | 'date' | 'time' | 'datetime' | 'timestamp' | 'number' | 'integer' | 'currency' | 'boolean' | 'object'
export type Visibility = 'anonymous' | 'public' | 'tenant' | 'user' | 'admin'

export type URL = `https://${string}.${string}`