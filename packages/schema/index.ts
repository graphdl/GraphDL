import { Things, BasePrepositions } from './things'


// export type Things = 'Dataset' | 'EntryPoint' | 'WebAPI' 
export type Prepositions = 'in' |  'on' |  'at' |  'as' | 'from' |  'to' |  'with' |  'by' |  'about' |  'for' |  'of' |  'over' |  'under' |  'through' |  'during' |  'before' |  'after' |  'between' |  'among'

export type IsThing = `is${Things}`
export type PrepositionThing = `${BasePrepositions}${Things}`
export type PrepositionalPhrase = {
  [P in PrepositionThing]: PrepositionalPhrase
} & ReturnStatement
export type Statement = Record<IsThing, PrepositionalPhrase>
export type StatementObject = {
  [K in 'is' | BasePrepositions]: Things
} & ReturnStatement
export type ReturnStatement = () => StatementObject


const crm: Statement = new Proxy({} as Statement, {
  get(target: Statement, prop: string) {
    console.log(prop)
  }
})

crm.isWebApplication
expect(crm.isSoftwareApplication.asService.forUseAction.ofOrganization()).toMatchInlineSnapshot()
