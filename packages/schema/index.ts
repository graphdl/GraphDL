import { Things, BasePrepositions } from './things'


export type Prepositions = 
  'in' |  'on' |  'at' |  'from' |  'to' |  'with' |  'by' |  'about' |  'for' |  'of' |  'over' |  'under' |  'through' |  
  'during' |  'before' |  'after' |  'between' |  'among'

export type PrepositionalPhrase = `${Prepositions}${Things}`

// export type Things = 'Dataset' | 'EntryPoint' | 'WebAPI' 
export type IsThing = `is${Things}`

// const result = Schema()
//   .API.isWebAPI()
//   .Endpoint.isEntryPoint()
//   .Resource.isDataset()

// expect(result).toEqual({
//   API: { is: 'WebAPI' },
//   Endpoint: { is: 'EntryPoint' },
//   Resource: { is: 'Dataset' }
// })


const schemaHandler = {
  get(target: { [x: string]: any }, prop: string) {
    if (prop === 'toJSON') { // This method will help in the final conversion to the expected result format
      return () => target;
    }

    // Return a function that will handle the 'isThing' methods
    return {
      isThing: (thing: Things) => {
        target[prop] = { is: thing };
        return new Proxy(target, schemaHandler); // Return a new Proxy with updated state
      }
    }[prop] || target[prop];
  }
}
export const Schema = () => new Proxy({}, schemaHandler)