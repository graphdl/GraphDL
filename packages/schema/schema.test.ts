import { describe, it, expect } from 'vitest'
import { createRecursiveProxy, splitString, Schema } from './schema'





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

// it('createRecursiveProxy', () => {
//   const idea = createRecursiveProxy()
//   expect(idea.isSomething.toTry.everyDay().toObject()).toMatchInlineSnapshot(`
//     {
//       "every": "day",
//       "is": "something",
//       "to": "try",
//     }
//   `)
// })

it('Schema', () => {
  const result = Schema()
    .Thing.isWebAPI.forUseAction()
    .Idea.isSomething.toTry.everyDay()
    .Habit.isSomething.toTry.everyDay()
    // .finalize(); // Finalize to convert to a regular object

  expect(result).toEqual({
    Idea: { is: 'Something', to: 'Try', every: 'Day' },
    Habit: { is: 'Something', to: 'Try', every: 'Day' },
  })
})