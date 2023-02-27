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

// export type Nouns = 'Noun' | 'Graph' | 'Properties'

export type Noun = {
  _id: string
  _icon: string
  _name: string
  _type: string
  _description: string
  _source: string | string[] | object[]
  _seed: string | string[] | object[]
  _visibility: 'string' | 'public' | 'tenant' | 'user' | 'admin'
  _graph: string
  // [property: string]: Properties | `[${Properties}]` | `${Properties}!` | `${Nouns}` | `[${Nouns}]` | `${Nouns}.${property}` | `[${Nouns}.${property}]`
}

export type Properties = 'string' | 'markdown' | 'url' | 'email' | 'phone' | 'date' | 'time' | 'datetime' | 'timestamp' | 'number' | 'integer' | 'currency' | 'boolean' | 'object'

