# graphdl
Graph Definition Language Specification

By specifying simple directional relationships: 

```
Thing.relationshipType -> AnotherThing.hasTypes
```

The reverse edges are created automatically:

```
AnotherThing.hasTypes <- Thing.relationshipType
```

Nodes are created with a schema definition using schemas and properties from Schema.org:
```
type: 
  name: User
  type: Person
  props: 
    - id: identifier
    - 
```

This allows much more flexibility by enabling types and props to any shape vs. rigid JSONLD objects with a @context of Schema.org, but has the ability to transform any object in this definition language into a valid Schema.org JSONLD Object.
