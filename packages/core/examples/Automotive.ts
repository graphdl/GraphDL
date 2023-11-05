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
    with: ['MonetaryAmount','LoanOrCredit'],
  }
}, {
  Dealer: {
    Buys: 'Vehicle',
    Trades: 'Vehicle',
    Sells: { 
      Vehicle: {
        to: 'Buyer',
        for: 'PriceSpecification',
        with: 'LoanOrCredit'
      }
    }
  }
})

