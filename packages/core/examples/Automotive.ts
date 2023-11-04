import { createGraph } from './CRM'

export const Automotive = createGraph({
  nouns: {
    Vehicle: 'Vehicle',
    Company: 'Organization',
    Sale: 'SellAction',
    Purchase: 'BuyAction',
    Deal: ['SellAction', 'BuyAction', 'Vehicle', 'LendAction', 'LoanOrCredit'],
    WholesaleDeal: 'Deal',
    RetailDeal: 'Deal',
    PrivatePartyDeal: 'Deal',
    Lead: 'Person',
    Buyer: ['Person', 'Company', 'AutoDealer'],
    Seller: ['Person', 'Company', 'AutoDealer'],
    Customer: ['Person', 'Company'],
    Loan: 'LoanOrCredit',
    CreditApp: 'LendAction',
    PreApproval: 'CreditApp',
    SalesPerson: 'Person',
    Dealer: 'AutoDealer',
    Auction: 'AutomotiveBusiness',
  },
  verbs: {
    Deal: {
      buyer: 'Customer',
      seller: 'Seller',
    },
    Customer: {
      buys: 'Deal',
    },
  }
})