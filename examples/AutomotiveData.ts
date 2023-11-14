import { createGraph } from '../packages/core/index'

export const AutomotiveData = createGraph({
  nouns: {
    Vehicle: 'Vehicle',
    Dealer: 'AutoDealer',
    Auction: 'AutomotiveBusiness',
    Consumer: 'Person',
    Listing: { is: 'Offer', of: 'Vehicle', at: 'PriceSpecification', by: 'AutoDealer' },
    Deal: { is: 'SellAction', of: 'Vehicle', by: 'AutoDealer', to: 'Person', at: 'PriceSpecification' },
    Buyer: { is: 'Person', with: ['MonetaryAmount?', 'LoanOrCredit?'] },
    Service: { is: 'Service', for: 'Vehicle' },
    ServiceQuote: { 
      is: 'Offer', of: 'Service', at: 'PriceSpecification', 
      by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash'] 
    },
    ServiceOrder: { 
      is: 'Order', of: 'Service', at: 'PriceSpecification', 
      by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash'] 
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
    },
    Auction: { Facilitates: { Deal: { of: 'Vehicle', by: 'AutoDealer', to: 'AutoDealer', at: 'PriceSpecification' } }},
    Dealer: {
      Buys: { Vehicle: { from: 'Auction', at: 'PriceSpecification' } },
      Sells: { Vehicle: { to: 'Person', at: 'PriceSpecification' } },
      Services: { Vehicle: { at: 'PriceSpecification' } },
      Quotes: { Service: { to: 'Person', at: 'PriceSpecification' } },
      Orders: { Service: { to: 'Person', at: 'PriceSpecification' } },
    },
    Consumer: { 
      Buys: { Vehicle: { from: 'Dealer', at: 'PriceSpecification', with: ['LoanOrCredit?','MonetaryAmount?'] } },
    }
  },
  triggers: {
    Vehicle: {
      Created: () => {}
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

