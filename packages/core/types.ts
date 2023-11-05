import { SchemaThings, SchemaActions, SchemaProperties } from './schema'

export type DefaultNouns = 'User' | 'Trigger' | 'Action' | 'Noun' | 'Verb' | 'Event' | 'Property' | 'Resource' | 'App' | 'API' | 'UI' | 'Function' | 'Request' | 'Response'
export type CommonPrepositions = 'about' | 'as' | 'at' | 'by' | 'for' | 'from' | 'in' | 'of' | 'on' | 'to' | 'via' | 'with' | 'within'
export type ExtendedPrepositions = 'aboard' | 'about' | 'above' | 'across' | 'after' | 'against' | 'along' | 'amid' | 'among' | 'anti' | 'around' | 'as' | 'at' | 'before' | 'behind' | 'below' | 'beneath' | 'beside' | 'besides' | 'between' | 'beyond' | 'but' | 'by' | 'concerning' | 'considering' | 'despite' | 'down' | 'during' | 'except' | 'excepting' | 'excluding' | 'following' | 'for' | 'from' | 'in' | 'inside' | 'into' | 'like' | 'minus' | 'near' | 'of' | 'off' | 'on' | 'onto' | 'opposite' | 'outside' | 'over' | 'past' | 'per' | 'plus' | 'regarding' | 'round' | 'save' | 'since' | 'than' | 'through' | 'to' | 'toward' | 'towards' | 'under' | 'underneath' | 'unlike' | 'until' | 'up' | 'upon' | 'versus' | 'via' | 'with' | 'within' | 'without'

export type Things<N extends Nouns<N>> = SchemaThings | DefaultNouns | NounNames<N>
export type PropositionalPhrase<N extends Nouns<N>> = `${CommonPrepositions}${Things<N>}` | `not${Capitalize<CommonPrepositions>}${Things<N>}`
export type NounNames<N extends Nouns<N>> = keyof Nouns<N> extends string ? keyof Nouns<N> : never
export type Noun<N extends Nouns<N>> = Record<ExtendedPrepositions | 'is', Things<N> | Array<Things<N>>> & Is
export type Nouns<N extends Record<string, any>> = {
  [K in keyof N]: Things<N> | Is | Noun<N[K]> | Array<Things<N> | PropositionalPhrase<N>>
}

// Verb - Creates
// Action - Create
// Trigger - onCreate
// Activity - Creating
// Event - Created

export type Is = { is: any }
export type PresentTense = `${string}s`
export type ToAction<V extends string> = V extends `${infer A}s` ? A : V
export type ToTrigger<V extends string> = V extends `${infer A}s` ? `on${Capitalize<A>}` : V
export type ToActivity<V extends string> = V extends `${infer A}s` ? `${A}ing` : V
export type ToEvent<V extends string> = V extends `${infer A}s` ? `${A}ed` : V


export const createGraph = <N extends Nouns<N>>(nouns: N, verbs?: Verbs<N>) => ({ nouns, verbs })

export type Verbs<N extends Nouns<N>> = Partial<Record<keyof Nouns<N>, Record<string, keyof Nouns<N>>>>
// export type Verbs<N extends Nouns<N>> = Partial<Record<keyof Nouns<N>, Record<string, keyof Nouns<N> | Partial<Record<keyof Nouns<N>, Noun<N>>>>>>

export const Automotive = createGraph({
  Vehicle: 'Vehicle',
  Dealer: 'AutoDealer',
  Listing: 'OfferForPurchase',
  Buyer: 'Person'
}, {
  Dealer: {
    Sells: 'Vehicle'
    //   Vehicle: {
    //     to: 'Buyer',
    //   }
    // }
  }
})

