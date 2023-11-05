import { E } from 'vitest/dist/reporters-5f784f42.js'
import { SchemaThings, SchemaActions, SchemaProperties } from './schema'

export type DefaultNouns = 'User' | 'Trigger' | 'Action' | 'Noun' | 'Verb' | 'Event' | 'Property' | 'Resource' | 'App' | 'API' | 'UI' | 'Function' | 'Request' | 'Response'
export type CommonPrepositions = 'about' | 'as' | 'at' | 'by' | 'for' | 'from' | 'in' | 'of' | 'on' | 'to' | 'via' | 'with' | 'within'
export type ExtendedPrepositions = 'aboard' | 'about' | 'above' | 'across' | 'after' | 'against' | 'along' | 'amid' | 'among' | 'anti' | 'around' | 'as' | 'at' | 'before' | 'behind' | 'below' | 'beneath' | 'beside' | 'besides' | 'between' | 'beyond' | 'but' | 'by' | 'concerning' | 'considering' | 'despite' | 'down' | 'during' | 'except' | 'excepting' | 'excluding' | 'following' | 'for' | 'from' | 'in' | 'inside' | 'into' | 'like' | 'minus' | 'near' | 'of' | 'off' | 'on' | 'onto' | 'opposite' | 'outside' | 'over' | 'past' | 'per' | 'plus' | 'regarding' | 'round' | 'save' | 'since' | 'than' | 'through' | 'to' | 'toward' | 'towards' | 'under' | 'underneath' | 'unlike' | 'until' | 'up' | 'upon' | 'versus' | 'via' | 'with' | 'within' | 'without'

export type Things<N extends Nouns<N>> = keyof Nouns<N> extends string ? SchemaThings | DefaultNouns | keyof Nouns<N> : never
export type PropositionalPhrase<N extends Nouns<N>> = `${CommonPrepositions}${Things<N>}` | `not${Capitalize<CommonPrepositions>}${Things<N>}`
export type Noun<N extends Nouns<N>> = Record<ExtendedPrepositions | 'is', Things<N> | Array<Things<N>>> & Is
export type Nouns<N extends Record<string,any>> = {
  [K in keyof N]: Things<N> | Is | Noun<N[K]> | Array<Things<N> | PropositionalPhrase<N>>
}
export type Is = { is: any }



