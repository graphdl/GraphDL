import { createGraph } from '../packages/core/index'
import { Schema } from '../packages/schema/index'

const nouns = Schema()
  .Listing.isOffer.ofVehicle.atPriceSpecification.byAutoDealer()
  // .Buyer.Buys.Vehicle.inDeal()
  .Dealer.isAutoDealer()
  .Consumer.isPerson()
  .Vehicle.isCar()

export const AutomotiveServices = createGraph({
  nouns: {
    
  }
})