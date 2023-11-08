import { G } from 'vitest/dist/reporters-5f784f42.js'
import { Graph, Noun, Pluralize } from '.'

export type API<G extends Graph<G>> = {

}

export type User<G extends Graph<G>> = {
  name: string
  email: string
  image?: Url
}


export type Url = `https://${string}` | URL

export type Auth<G extends Graph<G>> = {
  [N in keyof G['nouns']]: any //Fields<G, N>
}

export type Authorization<G extends Graph<G>, N extends keyof G['nouns']> = Access<G, N>

export type Access<G extends Graph<G>, N extends keyof G['nouns']> = 'Owner' | 'Admin' | 'Tenant' | 'User' | 'Hidden' | 'Public' | {
  list?:  (args: NounAccess<G, N>) => boolean
  search?: (args: NounAccess<G, N>) => boolean
  create?: (args: NounAccess<G, N>) => boolean
  read?: (args: NounAccess<G, N>) => boolean
  update?: (args: NounAccess<G, N>) => boolean
  delete?: (args: NounAccess<G, N>) => boolean
}

export type NounAccess<G extends Graph<G>, N extends keyof G['nouns']> = {
  type: N,
  id: ID,
  user: User<G>,
  data: Data<G>
}



export type Data<G extends Graph<G>> = {
  [N in keyof G['nouns']]: N extends keyof G['plurals'] ? G['plurals'][N] : Pluralize<N>
}

export type Collection<G extends Graph<G>, N extends Noun<G>> = {
  get: (id: ID) => Data<G> | undefined
  set: (id: ID, item: Data<G>) => void

  upsert: (id: ID, item: Data<G>) => void
  upsertMany: (items: Array<Data<G>>) => void  

  getOrCreate: (id: ID, createItem: () => Data<G>) => Data<G>
}

type ID = string | number
