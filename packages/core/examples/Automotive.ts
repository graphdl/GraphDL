import { createGraph } from '..'

export const Automotive = createGraph({
  Vehicle: 'Vehicle',
  Dealer: 'AutoDealer',
  Listing: {
    is: 'OfferForPurchase',
    of: 'Vehicle',
    at: 'PriceSpecification',
    by: 'AutoDealer',
  },
  Deal: {
    is: 'SellAction',
    of: 'Vehicle',
    by: 'AutoDealer',
    to: 'Person',
    at: 'PriceSpecification',
  },
  Buyer: {
    is: 'Person',
    with: ['MonetaryAmount?','LoanOrCredit?'],
  },
  Service: 'Service',
  ServiceQuote: {
    is: 'OfferForService',
    of: 'Service',
    at: 'PriceSpecification',
    by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash','AutoWax'],
  },
  ServiceOrder: {
    is: 'Order',
    of: 'Service',
    at: 'PriceSpecification',
    by: ['AutoDealer','AutoRepair','AutoBodyShop','AutoPartsStore','TireShop','AutoRental','GasStation','AutoWash','AutoWax'],
  },
}, {
  Dealer: {
    Buys: 'Vehicle',
    Trades: {
      Vehicle: {
        for: 'Vehicle',
        as: 'TradeAction',
      }
    },
    Sells: { 
      Vehicle: {
        to: 'Buyer',
        for: 'PriceSpecification',
        with: 'LoanOrCredit'
      }
    }
  }
})

