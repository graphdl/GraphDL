import type React from 'react'
import { Graph } from '.'

export type Component<T> = React.FC<T>

export type Site<G extends Graph<G>> = Component<{ graph: G }>
export type Page<G extends Graph<G>> = Component<{ graph: G }>
export type Section<G extends Graph<G>> = Component<{ graph: G }>
export type Block<G extends Graph<G>> = Component<{ graph: G }>
export type Field<G extends Graph<G>> = Component<{ graph: G }>
export type Form<G extends Graph<G>> = Component<{ graph: G }>
export type Modal<G extends Graph<G>> = Component<{ graph: G }>
export type Dialog<G extends Graph<G>> = Component<{ graph: G }>
export type Drawer<G extends Graph<G>> = Component<{ graph: G }>
export type Card<G extends Graph<G>> = Component<{ graph: G }>


export type Home<G extends Graph<G>> = Page<G>
export type LandingPage<G extends Graph<G>> = Page<G>
export type PricingPage<G extends Graph<G>> = Page<G>
export type AboutPage<G extends Graph<G>> = Page<G>
export type Docs<G extends Graph<G>> = Site<G>
export type DocsPage<G extends Graph<G>> = Page<G>
export type APIDocs<G extends Graph<G>> = Site<G>
export type APIDocsPage<G extends Graph<G>> = Page<G>
export type Blog<G extends Graph<G>> = Site<G>
export type BlogPost<G extends Graph<G>> = Page<G>

export type Header<G extends Graph<G>> = Section<G>
export type Hero<G extends Graph<G>> = Section<G>
export type Features<G extends Graph<G>> = Section<G>
export type Logos<G extends Graph<G>> = Section<G>
export type Pricing<G extends Graph<G>> = Section<G>
export type Testimonials<G extends Graph<G>> = Section<G>
export type CTA<G extends Graph<G>> = Section<G>
export type FAQ<G extends Graph<G>> = Section<G>
export type Contact<G extends Graph<G>> = Section<G>
export type Stats<G extends Graph<G>> = Section<G>
export type Footer<G extends Graph<G>> = Section<G>

export type App<G extends Graph<G>> = Component<{ graph: G }>
export type Dashboard<G extends Graph<G>> = Component<{ graph: G }>

export type List<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type Detail<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type Create<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type Edit<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type Delete<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type Search<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>

export type Settings<G extends Graph<G>> = Component<{ graph: G }>
export type Profile<G extends Graph<G>> = Component<{ graph: G }>
export type Login<G extends Graph<G>> = Component<{ graph: G }>




export type Admin<G extends Graph<G>> = App<G> & {
  // Users: List<G, 'User'> // TODO: After we create the base Admin/SaaS Graph
}