import type { createMachine } from 'xstate'
import type React from 'react'

export type Noun<TNouns extends string = string> = {
  id: string
  type: Word<{ noun: string, plural: string }>
  name?: string
  icon?: string | Url | React.FC
  sameAs?: string | Url
  description?: string
  seed?: Url | Function
  source?: Url | Source | Function
  state?: typeof createMachine<TNouns>
  properties: Record<TNouns, Property>
}

// TODO: Add `_` prefix to all metadata properties from Noun
// export type ResourceMetadata = {
//   _id: string
//   _name: string
//   _type: string
//   _sameAs: string | Url
//   _icon: string | Url | React.FC
//   _description?: string

// }


export type SeedFunction = ($: NounContext) => Promise< Success | Error >

export type GraphContext = {}
export type NounContext = {}
export type VerbContext = {}

export type Source = {}

export type Property = string | number | object | Function

export type Success = {
  success: true
} & Record<string, any>

export type Error = {
  success: false
  error: string
} & Record<string, any>

export type Verb = {
  id: string
  name: string
}

// export type Nouns = Record<string, Noun>
// export type Verbs = Record<string, Verb>

export type ResourceActions = 'Create' | 'Read' | 'Update' | 'Delete' | 'Change' | 'Error'

export type ResourceEvents = `on${ResourceActions}`

export type Component = React.FC

export type $Context<Nouns extends string = string> = {
  nouns: Record<Nouns, Noun>
  verbs: Record<string, Verb>
}

export type Url = `https://${string}.${string}` | URL
export type EmailAddress = `${string}@${string}.${string}`

export type Word<T> = string | T

// export type Word = string | {
//   verb: string // third person singular like `Creates`
//   activity: string // gerund like `Creating
//   action: string // active like `Create`
//   event: string // past tense like `Created`
// } | {
//   noun: string
//   plural: string
// }

export const sum = (a: number, b: number) => a + b