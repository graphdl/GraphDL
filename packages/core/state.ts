import { Graph, IsPresentTense } from '.'
import { 
  StateMachine, 
  MachineContext, 
  EventObject,
  Actor,
  AnyActorLogic,
  ProvidedActor,
  ParameterizedObject
} from 'xstate'

export type Machines<G extends Graph<G>> = {
  [N in keyof G['nouns']]: StateMachine<any, any, any, any, any, any, any, any, any>
}

export type Context<G extends Graph<G>, N extends keyof G['nouns']> = MachineContext


// export type Actions<G extends Graph<G>> = {
//   [S in keyof G['nouns']]: {
//     [K in keyof G['verbs'][S]]: K extends IsPresentTense<K> ? {
//       [O in keyof G['nouns']]: Action<G, S, K, O>
//     } : never
//   }
// }

export type Object<G extends Graph<G>, N extends keyof G['nouns']> = {

}

export type Subject<G extends Graph<G>, N extends keyof G['nouns']> = Actor<AnyActorLogic>
export type Logic<G extends Graph<G>, N extends keyof G['nouns']> = AnyActorLogic