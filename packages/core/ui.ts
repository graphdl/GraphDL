import type React from 'react'
import { Graph } from '.'
import { Url } from './api'

export type Component<T> = React.FC<T>

export type Fields<G extends Graph<G>, N extends keyof G['nouns']> = {
  [P in keyof G['properties'][N]]: Field<G, N, P>
}

export type Field<G extends Graph<G>, N extends keyof G['nouns'], P extends keyof G['properties'][N]> = {
  [F in keyof G['properties'][N][P]]: G['properties'][N][P][F]
}

export type Views<G extends Graph<G>, N extends keyof G['nouns']> = {
  list?: Component<{ graph: G, noun: N }>
  search?: Component<{ graph: G, noun: N }>
  create?: Component<{ graph: G, noun: N }>
  detail?: Component<{ graph: G, noun: N }>
  edit?: Component<{ graph: G, noun: N }>
}

export type NounViews<G extends Graph<G>> = {
  [N in keyof G['nouns']]: Views<G, N>
}

export type ListView<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type SearchView<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type CreateView<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type DetailView<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>
export type EditView<G extends Graph<G>, N extends keyof G['nouns']> = Component<{ graph: G, noun: N }>


export type Site<G extends Graph<G>> = Component<{ graph: G }>
export type Page<G extends Graph<G>> = Component<{ graph: G }>
export type Section<G extends Graph<G>> = Component<{ graph: G }>
export type Block<G extends Graph<G>> = Component<{ graph: G }>
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


export type Brand<G extends Graph<G>> = {
  logo: Url | Component<{ graph: G }>
  icon: Url | Component<{ graph: G }>
  name: string
  tagline: string
  url: Url
  theme: 'light' | 'dark' | 'auto'
  primaryColor: Color
  secondaryColor: Color
  accentColor: Color
  backgroundColor: Color
  lightBackground: Color
  lightPrimary: Color
  ligghtSecondary: Color
  lightAccent: Color
  darkBackground: Color
  darkPrimary: Color
  darkSecondary: Color
  darkAccent: Color
}

export type Story<G extends Graph<G>> = {
  hero: {
    persona: string
    industry: string
    job: string
  },
  problem: {
    external: string
    internal: string
    philisophical: string
    villian: string
  },
  guide: {
    name: string
    offer: string
  }
  plan: {
    step1: string
    step2: string
    step3: string
  } | string | object,
  action: string | object
  failure: string | object
  stakes: string | object
  success: string | object
  transformation: string | {
    from: string
    to: string
  }
}

export type BaseColors = 'black' | 'white' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' 
  | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
export type ColorShades = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'

export type Color = `${BaseColors}-${ColorShades}` | `#${string}`