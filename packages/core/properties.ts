import { Graph } from './graph'
import { ThingProperties } from './schema'

export type NounProperties<G extends Graph<G>> = {
  [N in keyof G['nouns']]: Properties<G, N>
}
export type NounFields<G extends Graph<G>> = {
  [N in keyof G['nouns']]: Fields<G, N>
}

export type PropertyReference<G extends Graph<G>, N extends keyof G['nouns'], P extends keyof G['properties'][N]> = 
  keyof G['nouns'] extends string ? (keyof G['nouns'] | `${keyof G['nouns']}.${P extends string ? P : never}` | `[${keyof G['nouns']}]`) : never

export type Properties<G extends Graph<G>, N extends keyof G['nouns']> = {
  [P in keyof G['properties'][N]]: Property<G,N,P> | `${Property<G,N,P>}!`
}

export type Property<G extends Graph<G>, N extends keyof G['nouns'], P extends keyof G['properties'][N]> = 
  PrimitiveTypes | ComplexTypes | FunctionalTypes | ThingProperties | PropertyReference<G,N,P>


export type PrimitiveTypes = 'String' | 'Number' | 'Boolean' | 'Date' | 'Time' | 'DateTime' | 'Timestamp' | 'ObjectId' | 'Array' | 'Object' | 'JSON' | 'Any'
export type ComplexTypes = 'Search' | 'Formula' | 'Select' | 'SelectMany' // | 'Reference' | 'Lookup'
export type FunctionalTypes = 'Code' | 'Function'

export type Fields<G extends Graph<G>, N extends keyof G['nouns']> = {
  [P in keyof G['properties'][N]]: Field<G, N, P>
}

export type Field<G extends Graph<G>, N extends keyof G['nouns'], P extends keyof G['properties'][N]> = {
  [F in keyof G['properties'][N][P]]: G['properties'][N][P][F]
}

export type FieldTypes = 'Array' | 'Blocks' | 'Checkbox' | 'Code' | 'JSON' | 'YAML' | 'Collabsible' | 'Date'
                        | 'Time' | 'DateTime' | 'Email' | 'Group' | 'Number' | 'Point' | 'RadioGroup' | 'Relationship'
                        | 'RichText' | 'Row' | 'Select' | 'SelectMany' | 'Tabs' | 'Text' | 'TextArea' | 'Toggle' 
                        | 'UI' | 'Upload' | 'URL' | 'Hidden' | 'Password'



// export type Property = PrimitiveProps | ComplexProps
export type PrimitiveProps = 'Text' | 'Number' | 'Checkbox'
export type ComplexProps = 'Select' | 'Reference' | 'Lookup' | 'Formula'
