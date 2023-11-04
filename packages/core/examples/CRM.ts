// import { createGraph } from '../graph'
import { Things } from '../schema'


const sendEmail = (obj:any) => {}
const sendText = (obj:any) => {}
const sendInvoice = (obj:any) => {}
const sendPayment = (obj:any) => {}
const calculateTotal = (obj:any) => {}
const remindFollowUp = (obj:any,obj2:any) => {}
const generateProposal = (obj:any) => {}
const confirmIntent = (obj:any) => {}

export const CRM = createGraph({
  nouns: {
    Company: 'Organization',
    Employee: 'Person',
    Customer: ['Company','Person'],
    Contact: 'Person',
    Deal: 'SellAction',
    Proposal: 'Offer',
    Product: 'Product',
    Service: 'Service',
    SalesPerson: 'Employee',
    Price: 'PriceSpecification',
    Lead: 'Person',
  },
  verbs: {
    Company: {
      Employs: 'Employee',
      Needs: ['Product','Service'],
      Buys: 'Deal'
    },
    Deal: {
      Has: 'Price',
      Includes: 'Product'
    },
    SalesPerson: {
      Sells: 'Deal'
    },
    Proposal: {
      Send: () => {},
    }
  },
  // TODO: Figure out the types
  // actions: {
  //   Send: {
  //     Proposal: proposal => proposal,
  //   }
  // },
  // events: {
  //   Deal: {
  //     Created: deal => confirmIntent(deal), // Do something
  //   },
  //   Proposal: {
  //     Created: proposal => generateProposal(proposal), // Do something
  //   },
  //   Text: {
  //     Recieved: message => {}, // Do something
  //     Sent: message => {}, // Do something
  //   },
  //   Email: {
  //     Recieved: message => {}, // Do something
  //     Sent: message => remindFollowUp(message, '1 day'), // Do something
  //   },
  // },

})


export function createGraph<
    N extends Record<string, Things | keyof N | Array<Things | keyof N>>, 
    V extends Partial<Record<keyof N, Record<string, keyof N | Array<keyof N > | Function>>>
  > (graph: { nouns: N, verbs?: V, actions?: V, events?: V }): object {
  const { nouns, verbs, actions, events } = graph
  return { nouns, verbs, actions, events }
}
// TODO: Figure out how to type this and pass in Noun/Verb names
export type Functions<I = any, O = any> = Record<string, (input: I) => O | Promise<O>>

