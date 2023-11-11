import { Things, ThingProperties, Activities, Prepositions } from './things'
import { Thing as SchemaThing } from './schema'

export function Schema() {
  let paths: string[] = [];
  let currentPath: string[] = [];

  const handler: ProxyHandler<any> = {
      get(target, prop: string) {
          if (prop === 'toNouns') {
              return () => [...paths];
          }

          // Add the property to the current path
          currentPath.push(prop);
          return new Proxy(() => {}, handler);
      },
      apply(target, thisArg, argumentsList) {
          // When the function is called, add the current path to paths and reset it
          paths.push(currentPath.join('.'));
          currentPath = [];
          return new Proxy(() => {}, handler);
      }
  };

  return new Proxy(() => {}, handler);
}