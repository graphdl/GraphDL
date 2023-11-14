export const splitString = (str: string): [string, string] => {
  const match = str.match(/[A-Z].*$/)
  return match ? [str.slice(0, match.index), str.slice(match.index)] : [str, '']
}

export const transformArrayToObject = (arr: string[]): { [key: string]: string } => {
  return arr.reduce<{ [key: string]: string }>((acc, item) => {
      const [key, value] = splitString(item)
      acc[key.toLowerCase()] = value.toLowerCase()
      return acc
  }, {})
}

export const createRecursiveProxy = (path: string[] = []): any => {
  const handler: ProxyHandler<() => any> = {
      get(target, prop: string, receiver) {
          if (typeof prop === 'symbol') {
              // Handle special case where the function is called
              if (prop === Symbol.toPrimitive || prop === Symbol.toStringTag) {
                  return () => transformArrayToObject(path)
              }
              return createRecursiveProxy(path)
          }
          return createRecursiveProxy([...path, prop])
      },
      apply(target, thisArg, argumentsList) {
          return transformArrayToObject(path)
      }
  }
  return new Proxy(() => {}, handler)
}