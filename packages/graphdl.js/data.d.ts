// ∵ GraphDL: A concrete implementation of GraphDL can function as a Database with Resources as instances of Nouns
// _priority: 4

// 🜉 Graph:
//   _project:       string = slugify(_name)
//   _database:      string = slugify(_name)
//   _domain:        string = https://${_project}.${env.BASE_DOMAIN}
//   _requests:      [Request.graph]

// ■ Noun:
//   _resources:     [Resource]
//   _requests:      [Request.noun]

// □ Resource:
//   _type:          Noun
//   _description:   A Resource is a specific instance of a Noun
//   instance:       Noun.resources
//   data:           json
//   subjectOf:      [Action.subject]
//   objectOf:       [Action.object]
//   requests:       [Request.resource]
//   created:        Request.create
//   createdAt:      created->timestamp
//   createdBy:      created->user
//   updated:        Request.update
//   updatedAt:      updated->timestamp
//   updatedBy:      updated->user
//   deleted:        Request.delete
//   deletedAt:      deleted->timestamp
//   deletedBy:      deleted->user
//   tenant:         created->tenant

// ▼ Role:
//   _seed:        anonymous | public | tenant | user | admin | owner
//   resources:    [Resource] 
//   users:        [User.roles]
//   requests:     [Request.role]

// ▽ User:
//   name:         string
//   email:        email
//   image:        url
//   roles:        [Role.users]
//   tenants:      [Tenant.users]
//   ownerOf:      [Tenant.owners]
//   adminOf:      [Tenant.admins]
//   requests:     [Request.user]

// △ Tenant:
//   users:        [User.tenants]
//   owners:       [User.ownerOf]
//   admins:       [User.adminOf]
//   requests:     [Request.tenant]

// ⟢ Request:
//   graph:        Graph.requests
//   noun:         Noun.requests
//   resource:     Resource.requests
//   user:         User.requests
//   role:         Role.requests
//   tenant:       Tenant.requests
//   timestamp:    timestamp
//   type:         list | search | get | create | update | delete
//   body:         json
//   query:        json
//   headers:      json
//   url:          url
//   colo:         string
//   ip:           string
//   isp:          string
//   city:         string
//   region:       string
//   country:      string
//   continent:    string
//   latitude:     latitude
//   longitude:    longitude
//   response:     Response.request

// ⟣ Response:
//   request:      Request.response
//   success:      boolean
//   status:       200 | 201 | 204 | 400 | 401 | 403 | 404 | 409 | 500
//   data:         json
//   html:         html
//   error:        json
  

import Core from './core'
export * from './core'

export type Graph = Core.Graph & {
  _project: string
  _database: string
  _domain: string
  _requests: Request[]
}

export type Noun = Core.Noun & {
  _resources: Resource[]
  _requests: Request[]
}

export type Resource = Core.Noun & {
  _type: string
  _description: string
  instance: string
  data: object
  requests: Request[]
  created: Request
  createdAt: string
  createdBy: string
  updated: Request
  updatedAt: string
  updatedBy: string
  deleted: Request
  deletedAt: string
  deletedBy: string
  tenant: string
}

export type Role =  Core.Noun & {
  _seed: string
  resources: Resource[]
  users: User[]
  requests: Request[]
}

export type User = Core.Noun & {
  name: string
  email: string
  image: string
  roles: Role[]
  tenants: Tenant[]
  ownerOf: Tenant[]
  adminOf: Tenant[]
  requests: Request[]
}

export type Tenant = Core.Noun & {
  users: User[]
  owners: User[]
  admins: User[]
  requests: Request[]
}

export type Request = Core.Noun & {
  graph: Graph
  noun: Noun
  resource: Resource
  user: User
  role: Role
  tenant: Tenant
  timestamp: string
  type: string
  body: object
  query: object
  headers: object
  url: string
  colo: string
  ip: string
  isp: string
  city: string
  region: string
  country: string
  continent: string
  latitude: string
  longitude: string
  response: Response
}

export type Response = Core.Noun & {
  request: Request
  success: boolean
  status: number
  data: object
  html: string
  error: object
}
