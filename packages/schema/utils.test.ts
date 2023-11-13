import { describe, it, expect } from 'vitest'

export const splitString = (str: string): [string, string] => {
  const match = str.match(/[A-Z].*$/);
  return match ? [str.slice(0, match.index), str.slice(match.index)] : [str, ''];
};

const transformArrayToObject = (arr: string[]): { [key: string]: string } => {
  return arr.reduce<{ [key: string]: string }>((acc, item) => {
      const [key, value] = splitString(item);
      acc[key.toLowerCase()] = value.toLowerCase();
      return acc;
  }, {});
};

const createRecursiveProxy = (path: string[] = []): any => {
  const handler: ProxyHandler<string[]> = {
      get(target, prop: string, receiver) {
          if (prop === 'toObject') {
              return transformArrayToObject(target);
          }
          return createRecursiveProxy([...target, prop]);
      }
  };
  return new Proxy(path, handler);
};


// Usage example
const thing = createRecursiveProxy();
const result = thing.isSomething.toTry.everyDay.toObject;
console.log(result); // { is: 'something', to: 'try', everyday: 'day' }

describe('splitString', () => {
  it('should split a string into two parts', () => {
    expect(splitString('helloWorld')).toEqual(['hello', 'World'])
  })
  it('should split a string into two parts', () => {
    expect(splitString('anotherExampleHere')).toEqual(['another', 'ExampleHere'])
  })
})

it('createRecursiveProxy', () => {
  const idea = createRecursiveProxy();
  expect(idea.isSomething.toTry.everyDay.toObject).toMatchInlineSnapshot(`
    {
      "every": "day",
      "is": "something",
      "to": "try",
    }
  `)
})
