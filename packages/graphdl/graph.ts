// ∵ GraphDL: The language is composable and extensible, and can be used to describe Nodes & Edges through Nouns & Verbs.
// _priority: 2

// 🜉 Graph:
//   _description:   A [Graph] consists of [Noun]s and the [Verb]s that connect them.
//   nouns:          [Noun.graph]
//   verbs:          [Verb]

// ■ Noun:
//   _description:   A [Noun] is a person, place, thing, or idea.
//   _subjectOf:     [Verb._subject]
//   _objectOf:      [Verb._object]
//   _graph:         [Graph.nouns]

// □ Resource:
//   _description:   A [Resource] is a specific instance of a [Noun]
//   subjectOf:      [Action.subject]
//   objectOf:       [Action.object]

// ● Verb:
//   _description:   A [Verb] connects a [Noun] to a different [Noun], and is expressed as "[Subject] [Verb] [Object]".
//   _subject:       Noun._subjectOf
//   _verb:          string = _name
//   _verbPast:      string = _name + 'ed'
//   _verbActive:    string = _name + 's'
//   _verbGerund:    string = _name + 'ing'
//   _object:        Noun._objectOf
//   _graph:         [Graph.verbs]

// ○ Action:
//   _description:   An [Action] happens when an instance of a [Noun] (i.e. [Resource]) does a [Verb] to a different [Resource].
//   subject:        Resource.subjectOf
//   verb:           Verb.active
//   object:         Resource.objectOf

import Functions from './functions'

export type Graph = Functions.Graph & {
  nouns: Noun[]
  verbs: Verb[]
}

export type Noun = Functions.Noun & {
  _subjectOf: Verb[]
  _objectOf: Verb[]
  resources: Resource[]
}

export type Resource = Functions.Resource & {
  subjectOf: Action[]
  objectOf: Action[]
}

export type Verb = Noun & {
  _subject: Noun
  _object: Noun
  active: Action[]
}

export type Action = Noun & {
  subject: Resource
  verb: Verb
  object: Resource
}
