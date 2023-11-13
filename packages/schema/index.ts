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

// export const MakeStatement = 

const MakeStatement = (props: string[] = []): Statement => new Proxy({} as Statement, {
  get(target: Statement, prop: string) {
    return AppendPreposition([...props, prop])
  }
})
const AppendPreposition = (props: string[] = []): StatementObject => new Proxy({} as StatementObject, {
  get(target: StatementObject, prop: string) {
    return AppendPreposition([...props, prop])
  }
})
const Schema: Record<string, Statement> & { getSchema: () => Statement } = new Proxy({}, {
  get(target: Record<string, Statement>, prop: string) {
    return MakeStatement([prop])
  }
}) as Record<string, Statement> & { getSchema: () => Statement }

Schema.isWebApplication
// expect(Schema.isSoftwareApplication.asService.forUseAction.ofOrganization()).toMatchInlineSnapshot()
