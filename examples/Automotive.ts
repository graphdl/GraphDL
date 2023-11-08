import { createGraph } from '../packages/core'

export const Automotive = createGraph({
  nouns: {
    Vehicle: 'Vehicle',
    Dealer: 'AutoDealer',
    Listing: { is: 'OfferForPurchase', of: 'Vehicle', at: 'PriceSpecification', by: 'AutoDealer' },
    Deal: { is: 'SellAction', of: 'Vehicle', by: 'AutoDealer', to: 'Person', at: 'PriceSpecification' },
    Buyer: { is: 'Person', with: ['MonetaryAmount?','LoanOrCredit?'] },
    Service: { is: 'Service', for: 'Vehicle' },
    ServiceQuote: { 
      is: 'OfferForService', of: 'Service', at: 'PriceSpecification', 
      by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash','AutoWax'] 
    },
    ServiceOrder: { 
      is: 'Order', of: 'Service', at: 'PriceSpecification', 
      by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash','AutoWax'],
    },
  },
  verbs: {
    Buyer: {
      Buys: {
        Vehicle: {
          with: ['MonetaryAmount?','LoanOrCredit?'],
          notWith: 'Service',
        }
      }
    }
  },
  triggers: {
    Vehicle: {
      Created: vehicle => {}
    }
  },
  brand: {
    primaryColor: 'emerald-600'
    
  },
  machines: {
    Listing: {
      states: {
        Created: { on: { 
          Updating: { target: 'Updated', guard: 'Cancelled' },
          Deleting: { target: 'Deleting', guard: 'Cancelled' },
        } },
        Updated: { on: { 
          Updating: { target: 'Updated', guard: 'Cancelled' },
          Deleting: { target: 'Deleting', guard: 'Cancelled' },
        } },
        Cancelled: { on: { Toggle: 'inactive' } },
        Deleted: { type: 'final' },
      },
    }
  }
})

