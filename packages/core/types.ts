import { SchemaThings, SchemaActions, SchemaProperties } from './schema'

export type DefaultNouns = 'User' | 'Trigger' | 'Action' | 'Noun' | 'Verb' | 'Event' | 'Property' | 'Resource' | 'App' | 'API' | 'UI' | 'Function' | 'Request' | 'Response'
export type CommonPrepositions = 'about' | 'after' | 'as' | 'at' | 'before' | 'by' | 'for' | 'from' | 'in' | 'of' | 'on' | 'to' | 'via' | 'with' | 'within'
export type ExtendedPrepositions = 'aboard' | 'about' | 'above' | 'across' | 'after' | 'against' | 'along' | 'amid' | 'among' | 'anti' | 'around' | 'as' | 'at' | 'before' | 'behind' | 'below' | 'beneath' | 'beside' | 'besides' | 'between' | 'beyond' | 'but' | 'by' | 'concerning' | 'considering' | 'despite' | 'down' | 'during' | 'except' | 'excepting' | 'excluding' | 'following' | 'for' | 'from' | 'in' | 'inside' | 'into' | 'like' | 'minus' | 'near' | 'of' | 'off' | 'on' | 'onto' | 'opposite' | 'outside' | 'over' | 'past' | 'per' | 'plus' | 'regarding' | 'round' | 'save' | 'since' | 'than' | 'through' | 'to' | 'toward' | 'towards' | 'under' | 'underneath' | 'unlike' | 'until' | 'up' | 'upon' | 'versus' | 'via' | 'with' | 'within' | 'without'

export type Things<N extends Nouns<N>> = SchemaThings | DefaultNouns | NounNames<N>
export type PropositionalPhrase<N extends Nouns<N>> = `${CommonPrepositions}${Things<N>}` | `not${Capitalize<CommonPrepositions>}${Things<N>}`
export type NounNames<N extends Nouns<N>> = keyof Nouns<N> extends string ? keyof Nouns<N> : never
export type Noun<N extends Nouns<N>> = Record<ExtendedPrepositions | 'is', Things<N> | Array<Things<N>>> & Is
export type Nouns<N extends Record<string, any>> = {
  [K in keyof N]: Things<N> | Is | Noun<N[K]> | Array<Things<N> | PropositionalPhrase<N>>
}

export type Is = { is: any }
export type PresentTense = `${string}s`
// TODO: Add support for irregular verbs with overrides in the verbs object for Action, Trigger, Activity, and Event
export type Verbs<N extends Nouns<N>> = Partial<Record<keyof Nouns<N>, Record<string, keyof Nouns<N> | Partial<Record<keyof Nouns<N>, Partial<Record<ExtendedPrepositions, Things<N>>>>>>>>

export type ExtractPredicates<N extends Nouns<N>, V extends Verbs<N>> = {
  [Subject in keyof V]: V[Subject] extends Record<string, any> ? keyof V[Subject] : never
}[keyof V]

export type ToAction<V extends string> = V extends `${infer A}s` ? A : V
export type ToTrigger<V extends string> = V extends `${infer A}s` ? `on${Capitalize<A>}` : V
export type ToActivity<V extends string> = V extends `${infer A}s` ? `${A}ing` : V
export type ToEvent<V extends string> = V extends `${infer A}s` ? `${A}ed` : V

export const createGraph = <N extends Nouns<N>, V extends Verbs<N>>(nouns: N, verbs?: V) => ({ nouns, verbs })

export type $Context<N extends Nouns<N>, V extends Verbs<N>> = {
  nouns: Nouns<N>
  verbs: V
  actions: Actions<N,V>
  triggers: Triggers<N,V>
  activities: Activities<N,V>
  events: Events<N,V>
  db: Database<N,V>
  stream: Stream<N,V>
  user: User<N,V>
  巛: Events<N,V> | Stream<N,V>
  彡: Database<N,V>
  入: Actions<N,V> | Triggers<N,V> | Events<N,V>
  口: Resource<N,V>
  _: Property<N,V>
  只: User<N,V>
}


export type Database<N extends Nouns<N>, V extends Verbs<N>> = Record<keyof Nouns<N>, any>
// TODO: Figure out how to support the `ToAction` type with `ExtractPredicates`
export type Actions<N extends Nouns<N>, V extends Verbs<N>, P = ExtractPredicates<N,V>> = Record<keyof Nouns<N>, Record<P extends string ? ToAction<P> : never, Action<N,V,P extends string ? string : never>>>
// TODO: Figure out how to infer the Subject and Object types from the Action Verb's relationships 
export type Action<N extends Nouns<N>, V extends Verbs<N>, P extends string> = ($: $Context<N,V>) => (subject: Nouns<N>) => Promise<Nouns<N>>
export type Triggers<N extends Nouns<N>, V extends Verbs<N>, P = ExtractPredicates<N,V>> = Record<keyof Nouns<N>, Record<P extends string ? ToTrigger<P> : never, Trigger<N,V,P extends string ? string : never>>>
export type Trigger<N extends Nouns<N>, V extends Verbs<N>, P extends string> = ($: $Context<N,V>) => (subject: Nouns<N>) => Promise<Nouns<N>>
export type Activities<N extends Nouns<N>, V extends Verbs<N>, P = ExtractPredicates<N,V>> = Record<keyof Nouns<N>, Record<P extends string ? ToActivity<P> : never, Activity<N,V,P extends string ? string : never>>>
export type Activity<N extends Nouns<N>, V extends Verbs<N>, P extends string> = ($: $Context<N,V>) => (subject: Nouns<N>) => Promise<Nouns<N>>
export type Events<N extends Nouns<N>, V extends Verbs<N>, P = ExtractPredicates<N,V>> = Record<keyof Nouns<N>, Record<P extends string ? ToEvent<P> : never, Event<N,V,P extends string ? string : never>>>
export type Event<N extends Nouns<N>, V extends Verbs<N>, P extends string> = ($: $Context<N,V>) => (subject: Nouns<N>) => Promise<Nouns<N>>
export type Stream<N extends Nouns<N>, V extends Verbs<N>> = Record<keyof Nouns<N>, keyof V>
export type Resource<N extends Nouns<N>, V extends Verbs<N>> = Record<keyof Nouns<N>, keyof V>
export type Property<N extends Nouns<N>, V extends Verbs<N>> = Record<keyof Nouns<N>, keyof V>
export type User<N extends Nouns<N>, V extends Verbs<N>> = Record<keyof Nouns<N>, any>

// Verb - Creates
// Action - Create
// Trigger - onCreate
// Activity - Creating
// Event - Created

export const Automotive = createGraph({
  Vehicle: 'Vehicle',
  Dealer: 'AutoDealer',
  Listing: 'OfferForPurchase',
  Buyer: 'Person'
}, {
  Dealer: {
    Sells: { 
      Vehicle: {
        to: 'Buyer',
        for: 'PriceSpecification',
        with: 'LoanOrCredit'
      }
    }
  }
})

