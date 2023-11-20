import { Things, BasePrepositions } from './things'
import { createRecursiveProxy } from './schema'


// export type Things = 'Dataset' | 'EntryPoint' | 'WebAPI' 
export type Prepositions = 'in' |  'on' |  'at' |  'as' | 'from' |  'to' |  'with' |  'by' |  'about' |  'for' |  'of' |  'over' |  'under' |  'through' |  'during' |  'before' |  'after' |  'between' |  'among'

export type IsThing = `is${Things}`
export type PrepositionThing = `${Prepositions}${Things}`
export type PrepositionalPhrase = {
  [P in PrepositionThing]: PrepositionalPhrase
} & ReturnStatement

export type Nouns = {
  [N in string]: {
    [I in IsThing]: PrepositionalPhrase
  } 
} 

export const Schema = (schemaState: any = {}): Nouns => {
  return new Proxy({}, {
      get(target, prop: string, receiver) {
          if (typeof prop !== 'string') return;
          return createRecursiveProxy([], prop, schemaState)
      }
  });
}


export type StatementObject = {
  [K in 'is' | BasePrepositions]?: Things
} & ReturnStatement

export type ReturnStatement = (props?: object) => Nouns




it('should be chainable', () => {
  expect(Schema()
    .Idea.isIntangible.aboutCode()
    .Vehicle.isVehicle.aboutAnalysisNewsArticle()
    .Thing.isSoftwareApplication.asService.forUseAction.ofOrganization()
    .AnotherThing.isSoftwareApplication()
    .Stores.isStore.withProduct.about3DModel()
    .Dealership.isAutoDealer()
  ).toMatchInlineSnapshot()
})
