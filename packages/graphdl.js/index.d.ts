
export type Graph = Noun & {
  _icon: '■●'
  _name: 'Graph'
  _plural: 'Graphs'  
  _description: 'A Graph consists of Nouns and the Verbs that connect them.'

  nouns: {
    [noun: string]: Noun
  }
  verbs: {
    [verb: string]: Verb
  }
  roles: {
    [role: string]: Role
  }
  resources: (args: Search) => Promise<Resource[]>
  actions: (args: Search) => Promise<Action[]>
  requests: (args: Search) => Promise<Request[]>
  users: (args: Search) => Promise<User[]>
}

export type Noun = {
  _id: string
  _icon: string
  _name: string
  _plural: string
  _type: string
  _sameAs?: string
  _description: string
  _source?: URL | Source
  _seed?: URL | Source
  _visibility: Visibility
  _subjectOf?: Verbs[]
  _objectOf?: Verbs[]
  resources: (args: Search) => Promise<Resource[]>
} & Properties

export type Verb = Noun & {
  _icon: '●'
  _name: 'Verb'
  _plural: 'Verbs'
  _description: 'A Verb connects a Noun to a different Noun, and is expressed as "[Subject] [Verb] [Object]".'
  _subject: Nouns
  _verb: string
  _verbPast: string
  _verbActive: string
  _verbGerund: string
  _inverse: string
  _inversePast: string
  _inverseActive: string
  _inverseGerund: string
  _object: Nouns
  actions: (args: Search) => Promise<Action[]>
}

export type Resource = Noun & {
  _icon: '□'
  _name: 'Resource'
  _plural: 'Resources'
  _description: 'A Resource is a specific instance of a Noun and can be stored or transmitted in JSON as Data.'
  _subjectOf: (args: Search) => Promise<Actions[]>
  _objectOf: (args: Search) => Promise<Actions[]>
  tenant: string
  graph: string
  type: Nouns
  id: string
  data: object
  requests: (args: Search) => Promise<Request[]>
  created: () => Promise<Action>
  createdAt: Date
  createdBy: () => Promise<User>
  updated: (args: Search) => Promise<Action[]>
  updatedAt: Date
  updatedBy: () => Promise<User>
  deleted: () => Promise<Action>
  deletedAt: Date
  deletedBy: () => Promise<User>
}

export type Action = Noun & {
  _icon: '○'
  _name: 'Action'
  _plural: 'Actions'
  _description: 'An Action happens when an instance of a Noun (i.e. Resource) does a Verb to a different Resource.'
  _subject: Resources
  _verb: Verbs
  _object: Resources
}


export type Nouns = 
  `${keyof Graph['nouns']}` // 1:1 Embedded
  | `[${keyof Graph['nouns']}]` // 1:N Embedded
  | `${keyof Graph['nouns']}.${keyof Graph['nouns']['noun']}` // 1:1 Reference
  | `${keyof Graph['nouns']}->${keyof Graph['nouns']['noun']}` // 1:1 Lookup
  | `[${keyof Graph['nouns']}.${keyof Graph['nouns']['noun']}]` // 1:N Reference
  | `[${keyof Graph['nouns']}->${keyof Graph['nouns']['noun']}]` // 1:N Lookup

export type Verbs = `${keyof Graph['verbs']}`
export type Resources = `${keyof Graph['nouns']}/${string}`
export type Actions = `${keyof Graph['verbs']}/${string}`

export type Properties = {
  [property: string]: Property | `[${Property}]` | `${Property}!` 
}

export type Property = 'string' | 'markdown' | 'url' | 'email' | 'phone' | 'date' | 'time' | 'datetime' | 'timestamp' | 'number' | 'integer' | 'currency' | 'boolean' | 'object'
export type Visibility = 'anonymous' | 'public' | 'tenant' | 'user' | 'admin'
export type URL = `https://${string}.${string}`
export type DefaultRoles = 'anonymous' | 'public' | 'tenant' | 'user' | 'admin'
export type Source = {
  url: URL
  // ToDo: Flesh out the rest of the source object
}

export type Search = {
  page: number
  pageSize: number
  limit: number
  offset: number
  sort: string | [string]
  filter: {
    [noun: string]: string | number | boolean | Date
  }
}

export type Role = Noun & {
  _icon: '▼'
  _name: 'Role'
  _plural: 'Roles'
  _description: 'A role is a set of permissions that can be assigned to a user.'
  default: 'allow' | 'deny'
  permissions: [Permission]
}

export type Permissions = 'read' | 'write' | 'readwrite'

export type Permission = 
  `${keyof Graph['nouns']}:${Permissions}`
  | `${keyof Graph['nouns']}.${keyof Graph['nouns']['noun']}:${Permissions}`
  | `${keyof Graph['verbs']}:${Permissions}`
  | `${keyof Graph['verbs']}.${keyof Graph['verbs']['verb']}:${Permissions}`

export type User = Noun & {
  name: string
  email: string
  image: string
  roles: Role[]
  tenants: string[]
  ownerOf: string[]
  adminOf: string[]
  requests: (args: Search) => Promise<Request[]>
}