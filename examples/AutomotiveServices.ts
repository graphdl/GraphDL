import { listThings } from '../packages/things/index'
import { createGraph } from '../packages/core/index'
import { Schema } from '../packages/schema/index'

const nouns = Schema()
  .Service.isService.ofVehicle({
    provider: 'Provider.service',
  })
  .ServiceQuote.isQuoteAction.ofService()
  .ServiceOrder.isOrderAction.ofService()
  .Repair.isService.byAutoRepair()
  .Wash.isService.byAutoWash()
  .Detail.isService.byAutoWash()
  .Rental.isRentAction.ofVehicle()
  .OrderStatus.isState.ofOrderAction()
  .Delivery.isTransferAction.ofVehicle.toPerson()
  .Provider.isAutomotiveBusiness.withService()
  

export const AutoServices = createGraph({
  nouns: {
    Service: { is: 'Service', of: 'Vehicle' },
    ServiceQuote: { is: 'QuoteAction', of: 'Service' },
    ServiceOrder: { is: 'OrderAction', of: 'Service' },
    Repair: { is: 'Service', by: 'AutoRepair' },
    Wash: { is: 'Service', by: 'AutoWash' },
    Detail: { is: 'Service', by: 'AutoWash' },
    Rental: { is: 'RentAction', of: 'Vehicle' },
    OrderStatus: { is: 'State', of: 'OrderAction' },
    Delivery: { is: 'TransferAction', of: 'Vehicle', to: 'Person' },
    Provider: { is: 'AutomotiveBusiness', with: 'Service' },
  },
  // nouns,
  verbs: {
    Provider: { Delivers: 'Service' },
  },
  properties: {
    Service: {
      provider: 'Reference',
    }
  }
})

export const ServiceThings = listThings({
  Service: 'Service',
  ServiceQuote: 'QuoteAction',
  ServiceOrder: 'OrderAction',
  Transport: 'TransferAction',
  Wash: 'AutoWash',
  Repair: 'AutoRepair',
  Rental: 'AutoRental',
  Towing: 'TransferAction',
  Valet: 'TransferAction',
  BodyShop: 'AutoBodyShop',
})
