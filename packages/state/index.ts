import { Person, Thing } from 'schema-dts'

type Noun = Omit<Thing, '@id'>

const User: Person = { 
  '@type': 'Person',
  name: 'User',
  description: 'A user of the program.'
}



export type $Context = {
  // 巛: Event
  // 彡: Data
  // 田: NounGroups
  // 入: Functions
  // 亘: App
  // 目: Tabs | Rows
  // 吕: UI
  // 只: User
  // 回: Noun
  // 口: Resource
  // _: Property
}