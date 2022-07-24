# graphdl
Graph Definition Language Specification


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
