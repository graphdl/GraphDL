import { describe, it, expect } from 'vitest'
import { Schema } from './chain'

// // Example Usage
// const app = Schema();

// app.Consumer.is.Person.buying.Car;
// app.Dealer.is.AutoDealer;

// console.log(app.toNouns());
// // Expected Output: ['Consumer.is.Person.buying.Car', 'Dealer.is.AutoDealer']

describe('Schema', () => {
  it('should work', () => {
    const app = Schema();

    app.Consumer.is.Person.buying.Car()
    app.Dealer.is.AutoDealer()
    // app.Deal.is.SellAction.of.Car.to.Consumer()

    expect(app.toNouns()).toEqual(['Consumer.is.Person.buying.Car', 'Dealer.is.AutoDealer'])
  })
})