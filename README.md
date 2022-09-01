# GraphDL
Graph Definition Language Specification

## Features

- Supports both Strong and Dynamic Types
- Automatically Generates Reverse Edges
- Supports Option Cascading Updates & Deletes
- Generates Types & Interfaces for all languages including Typescript
- Generates Hypermedia-Driven (HATEOAS) RESTful APIs
- Generates OpenAPI Specification documents
- Generates GraphQL Schemas & Automatic Resolvers
- Has VSCode Plugin for Syntax Linting (and reverse edge creation)

GraphDL is based on TypeScript
```
type User: Person = {
  id: 'id'
  firstName: 'string'
  lastName: 'string'
  email: 'email'
  phone: 'telephone'
  knows: 'User.knows'
  children: 'User.parents'
  parents: 'User.children'
}
```


```
import { id, email, telephone, Person } from 'graphdl'

type User: Person = {
  id: id
  firstName: string
  lastName: string
  email: email
  phone: telephone
  knows: User.email
}
```



Nodes are created with a schema definition using schemas and properties from Schema.org:
```
type: 
  name: User
  type: Person
  props: 
    - id: identifier
    - firstName: givenName
    - lastName: familyName
    - email: email
    - phone: telephone
    - knows: User.email
```

This allows much more flexibility by enabling types and props to any shape vs. rigid JSONLD objects with a @context of Schema.org, but has the ability to transform any object in this definition language into a valid Schema.org JSONLD Object.

If you want to reference a type that is outside of Schema.
```
  type: Person
```

Schema relationships are described with schema property value of `[TypeName.propName]` of the related entity type
```
    - knows: User.email
```

By specifying simple directional relationships: 
```
Thing.relationshipType -> AnotherThing.hasTypes
```

The reverse edges are created automatically:

```
AnotherThing.hasTypes <- Thing.relationshipType
```

Using these schemas, Typescript Types, OpenAPI Specs, and GraphQL Schemas can be generated.

## Background
This was built to manage the [Driv.ly](https://driv.ly) API which gets millions of calls per day.

[![](https://github.com/drivly/driv.ly/raw/main/logo.png)](https://driv.ly)

## [🚀 We're hiring!](https://careers.do/apply)
[Driv.ly](https://driv.ly) is simple APIs to buy & sell cars online, funded by some of the [biggest names](https://twitter.com/TurnerNovak) in [automotive](https://fontinalis.com/team/#bill-ford) and [finance & insurance](https://www.detroit.vc)

We're building our entire infrastructure on Cloudflare Workers, Durable Objects, KV, R2, and PubSub.  If you're as passionate about these transformational technologies as we are, we'd love for you to join our rapidly-growing team.

