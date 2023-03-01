// ∵ GraphDL: Javascript Functions are supported as a native property type in GraphDL.
// _priority: 3

// import: string | [string] = graphdl from 'https://pkg.do/graphdl'

// 🜉 Graph:
//   _onInitialize:  function
//   _onError:       function = (err, ctx) => fetch(`https://err.do/${ctx.graph}/${ctx.requestId}/$${err.message}/${err.stack}`)

// ■ Noun:
//   _beforeCreate:  function
//   _beforeUpdate:  function
//   _beforeDelete:  function
//   _onCreate:      function = (obj, ctx) => obj.created = ctx.req.id && obj.updated = ctx.req.id
//   _onUpdate:      function = (obj, ctx) => obj.updated = ctx.req.id
//   _onDelete:      function = (obj, ctx) => obj.deleted = ctx.req.id
//   _afterCreate:   function
//   _afterUpdate:   function
//   _afterDelete:   function

// ∷ Properties:     function

import Data from './data'
export * from './data'

export type Graph = Data.Graph & {
  _onInitialize: Function
  _onError: Function
}

export type Noun = Data.Noun & {
  _beforeCreate: Function
  _beforeUpdate: Function
  _beforeDelete: Function
  _onCreate: Function
  _onUpdate: Function
  _onDelete: Function
  _afterCreate: Function
  _afterUpdate: Function
  _afterDelete: Function
  _validate: Function
}
