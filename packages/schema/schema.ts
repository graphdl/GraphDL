export const splitString = (input: any): [string, string] => {
  if (typeof input !== 'string') {
      return ['', ''];
  }
  const match = input.match(/[A-Z].*$/);
  return match ? [input.slice(0, match.index), input.slice(match.index)] : [input, ''];
};

const transformArrayToObject = (arr: string[]): { [key: string]: string } => {
  return arr.reduce<{ [key: string]: string }>((acc, item) => {
      if (typeof item === 'string') {
          const [key, value] = splitString(item);
          acc[key.toLowerCase()] = value.toLowerCase();
      }
      return acc;
  }, {});
};

export const createRecursiveProxy = (path: string[] = [], rootKey: string = '', schemaState: any = {}): any => {
  const handler: ProxyHandler<() => any> = {
      get(target, prop: string, receiver) {
          if (prop === 'finalize') {
              return () => {
                  if (path.length > 0 && rootKey) {
                      const result = transformArrayToObject(path);
                      schemaState[rootKey] = result;
                  }
                  return JSON.parse(JSON.stringify(schemaState)); // Deep clone to ensure a simple object
              };
          }
          return createRecursiveProxy([...path, prop], rootKey, schemaState);
      },
      apply(target, thisArg, argumentsList) {
          if (path.length > 0 && rootKey) {
              const result = transformArrayToObject(path);
              schemaState[rootKey] = result;
          }
          return Schema({...schemaState}); // Continue chaining with updated state
      }
  };
  return new Proxy(() => {}, handler);
};

export const Schema = (schemaState: any = {}): any => {
  return new Proxy(() => {}, {
      get(target, prop: string, receiver) {
          return createRecursiveProxy([], prop, schemaState);
      }
  });
};

const schema = Schema()
  .Thing.isWebAPI.forUseAction()
  .Idea.isSomething.toTry.everyDay()
  .Habit.isSomething.toTry.everyDay();

console.log(schema); // Inspect the proxy state
const result = schema.finalize();