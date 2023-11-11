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

    expect(app.toNouns()).toEqual(['Consumer.is.Person.buying.Car', 'Dealer.is.AutoDealer'])
  })
})