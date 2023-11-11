import { Schema } from './chain'


// Usage Example
describe('CRM', () => {
  it('should work', () => {
    const $ = Schema();

    $.Customer.is.Organization()
    $.Contact.is.Person.in.Organization()
    $.Deal.is.SellAction.of.Product.to.Customer()
    $.Customer.is.Thing()

    expect($.getPaths()).toMatchInlineSnapshot(`
      {
        "Contact": {
          "in": "Organization",
          "is": "Person",
        },
        "Customer": {
          "is": "Thing",
        },
        "Deal": {
          "is": "SellAction",
          "of": "Product",
          "to": "Customer",
        },
      }
    `)
  })
})
