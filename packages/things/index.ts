import { PrepositionsAndActivities, Things } from './things'
// import { Thing } from './schema'

export type ThingsAndPrepositions<T extends string> = ThingsWithInstances<T> | PrepositionsAndActivities 
export type ThingsWithInstances<T extends string> = T | Things | `InstanceOf${Things | T}`
export type SimpleThings<T extends string> = Record<string, ThingsWithInstances<T>>
// export type ExpandedThings<T extends Record<T extends string ? T : never, any>> = {
//   is: ThingsWithInstances<T> | ThingsWithInstances<T>[]
// } & {
//   [K in PrepositionsAndActivities]?: ThingsAndPrepositions<T> | ThingsAndPrepositions<T>[]
// }

// Keep this very simple as only Thing
export const listThings = <T extends string>(things: Record<T, Things>) => things
// export const defineThings = <T extends string>(things: Record<T, ThingsWithInstances<T> | ThingsWithInstances<T>[] | ExpandedThings<T>>) => things


// listThings is only string value things from Schema.org
// defineThings allows expanded definitions with `is` and prepositions (and arrays of those)
// defineDomain only allows prepositions to refer to other Things in the domain
// defineGraph allows Activities (gerunds) to use Verbs to relate to other things in the domain


export const things = listThings({
  Dealer: 'AutoDealer',
  Vehicle: 'Vehicle',
  Website: 'WebSite',
  Service: 'Service',
  ServiceQuote: 'QuoteAction',
  ServiceOrder: 'OrderAction',
  Repair: 'Service',
  Wash: 'Service',
  Detail: 'Service',
  Rental: 'RentAction',
  OrderStatus: 'State',
  Delivery: 'TransferAction',
  Towing: 'TransferAction',
  Valet: 'TransferAction',
  BodyShop: 'AutoBodyShop',
})

// export const definedThings = defineThings({
//   // Dealer: 'AutoDealer',
//   Dealer: { is: 'AutoDealer', on: 'WebSite' },
//   Vehicle: { is: 'Car' },
// })


type Domain = () => Record<string, { is: Things }>
type Noun = {
  is: Things
}

