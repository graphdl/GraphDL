import { Action, Thing } from 'schema-dts'
import type { createMachine } from 'xstate'
import type React from 'react'
import { $Context } from './context'

export type Graph<Nouns extends string = string, Verbs extends string = string> = {
  nouns: Record<Nouns, Noun>
  verbs: Record<Verbs, Verb>
} & Metadata<Nouns, Verbs>

export type Noun<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {
  noun: string | { singular: string, plural: string }
  actions?: Record<Verbs, Nouns | Verb<Nouns, Verbs, T>>
} & Metadata<Nouns, Verbs, T>

export type Verb<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {
  subject: Noun
  verb: string | { action: string, activity: string, act: string, event: string,  }
  object: Noun
} & Metadata<Nouns, Verbs, T>


export type Data = Record<string,any>

export type Metadata<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {
  icon?: string | Url | React.FC
  sameAs?: string | Url | Thing
  description?: string
  seed?: Url | Function
  source?: Url | Source | Function
  state?: typeof createMachine<T>
  properties?: Record<keyof T, Property>
  metadata?: Data
}

// export type EventHook<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {

export type Hook = ($: $Context) => Promise< Success | Error >

export type ResourceMetadataProperties = {
  [key in `_${keyof Omit<Noun, 'properties'>}` ]: Noun[keyof Noun]
}



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


// export type Nouns = Record<string, Noun>
// export type Verbs = Record<string, Verb>

export type ResourceActions = 'Create' | 'Read' | 'Update' | 'Delete' | 'Change' | 'Error'

export type ResourceEvents = `on${ResourceActions}`

export type Component = React.FC


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