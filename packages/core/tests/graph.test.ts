import { describe, expect, test } from 'vitest'
import { createGraph } from '../graph'



describe('Invoke createGraph', () => {
  
  // test('Error if no Nouns pass in', () => {
  //   expect(createGraph({
  //     nouns: {
  //       name: 'Text'
  //     },
  //   })).toThrow('No Nouns provided')
  // })


  // test('Create Simple Graph', () => {
  //   expect(

  //     createGraph({
  //       nouns: {},
  //     })

  //   )
  // })


  test('Create Graph with empty init function', () => {
    expect(
      
      createGraph( async $ =>  $ )

    ).toMatchInlineSnapshot(``)
  })


  test('Create Graph with init Function with $Context', () => {
    expect(
      
      createGraph(async $ =>  {
        return $
        
      })

    ).toMatchInlineSnapshot(``)
  })

})