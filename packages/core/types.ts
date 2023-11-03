import { Action, Thing } from 'schema-dts'
import type { createMachine } from 'xstate'
import type React from 'react'
import { $Context } from './context'
import { Things, ThingProperties } from './schema'


export type Graph<Nouns extends string = string, Verbs extends string = string> = {
  nouns: Record<Nouns, Noun>
  verbs?: Record<Verbs, Verb>
} & Metadata<Nouns, Verbs>

export type Noun<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {
  noun: { singular: string, plural: string }
  actions?: Record<Verbs, Nouns | Verb<Nouns, Verbs, T>>
} & Metadata<Nouns, Verbs, T>

export type Verb<Nouns extends string = string, Verbs extends string = string, T extends Data = {}> = {
  subject: Noun
  verb: string | { action: string, activity: string, act: string, event: string,  }
  object: Noun
} & Metadata<Nouns, Verbs, T>


export type PropertyPrimitives = 'Number' | 'Date' | 'Time' | 'Boolean' | 'Text' | 'DateTime'
export type PropertyWebPrimitives = 'TextArea' | 'RichText' | 'Select' | 'SelectMany' | 'Checkbox' | 'Radio' | 'File' | 'Url' | 'Email' | 'Phone' 
export type PropertyCodePrimitives = 'Code' | 'JSON' | 'JavaScript' | 'TypeScript' | 'YAML' | 'Markdown'

export type PropertyRelationships<Nouns extends string, Verbs extends string> = 
  `${Nouns}` | `${Nouns}!` | [`${Nouns}`] | [`${Nouns}!`] |
  `巛${Nouns}` | [`巛${Nouns}!`] 

export type PropertyNames<Nouns extends string, Verbs extends string> = PropertyPrimitives | PropertyWebPrimitives | PropertyCodePrimitives | PropertyRelationships<Nouns, Verbs>

export type SimpleGraph<Nouns extends string = string, Verbs extends string = string> = Record<Nouns, Noun<Nouns, Verbs> | SimpleNouns<Nouns, Verbs>  | Things | Things[] > // (Nouns | Things) | (Nouns | Things)[]>
export type SimpleNouns<Nouns extends string = string, Verbs extends string = string> = Record<Nouns, Noun<Nouns, Verbs>>

export type TestNouns<Nouns extends string = string> = Record<Nouns, Things | Things[] | Nouns> //Nouns | Things | (Nouns | Things)[]>

const exampleNouns: TestNouns = {
  Company: 'Organization',
  Contact: 'Person',
  Customer: ['Organization', 'Person', 'AcceptAction' ],
  Idea: 'Company',
}

const exampleGraph: SimpleGraph = {
  nouns: {
    // Customer: 
    // Customer: 'Organization',
    // Contact: 'Person',
    // Deal: 'SellAction',
    // Lead: 'Person',
  },
  verbs: {

  }
}

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

// export type Properties<T extends Data = {}> = Record<keyof T, Property>

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

export type Property<Nouns extends string = string, Verbs extends string = string, Properties extends string = string> = {

}

export type Success = {
  success: true
} & Record<string, any>

export type Error = {
  success: false
  error: string
} & Record<string, any>


// export type Nouns = Record<string, Noun>
// export type Verbs = Record<string, Verb>

const ResourceActions = ['Create', 'Read', 'Update', 'Delete', 'Change', 'Error'] as const
export type ResourceActionsArray = typeof ResourceActions
export type ResourceEvent = ResourceActionsArray[number]
export type ResourceEvents = `on${ResourceEvent}`

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