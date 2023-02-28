import { mock, test } from 'node:test'
import assert from 'node:assert'

import { compose, init, generateJavascript } from './core.js'





test('confirm schema', async (t) => {
  const schema = await fetch('https://graphdl.org/schema.json').then(res => res.json())

  console.log(schema)

  compose(schema.graphdl)
  
  assert.strictEqual(schema, schema)
})



// test('synchronous passing test', (t) => {
//   // This test passes because it does not throw an exception.
//   assert.strictEqual(1, 1)
// })

// test('spies on a function', () => {
//   const sum = mock.fn((a, b) => {
//     return a + b
//   })

//   assert.strictEqual(sum.mock.calls.length, 0)
//   assert.strictEqual(sum(3, 4), 7)
//   assert.strictEqual(sum.mock.calls.length, 1)

//   const call = sum.mock.calls[0]
//   assert.deepStrictEqual(call.arguments, [3, 4])
//   assert.strictEqual(call.result, 7)
//   assert.strictEqual(call.error, undefined)

//   // Reset the globally tracked mocks.
//   mock.reset()
// })