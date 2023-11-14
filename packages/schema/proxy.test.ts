import { describe, it, expect } from 'vitest'
import { createRecursiveProxy, splitString } from './proxy'





// Usage example
const thing = createRecursiveProxy()
const result = thing.isSomething.toTry.everyDay.toObject
console.log(result) // { is: 'something', to: 'try', everyday: 'day' }

describe('splitString', () => {
  it('should split a string into two parts', () => {
    expect(splitString('helloWorld')).toEqual(['hello', 'World'])
  })
  it('should split a string into two parts', () => {
    expect(splitString('anotherExampleHere')).toEqual(['another', 'ExampleHere'])
  })
})

it('createRecursiveProxy', () => {
  const idea = createRecursiveProxy()
  expect(idea.isSomething.toTry.everyDay()).toMatchInlineSnapshot(`
    {
      "every": "day",
      "is": "something",
      "to": "try",
    }
  `)
})
