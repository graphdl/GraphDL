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

