import { expect, it } from 'vitest'

export type Thing = 'Dataset' | 'EntryPoint' | 'WebAPI' 
export type IsThing = `is${Thing}`
type SchemaStructure = {
  [key: string]: { is?: Thing };
}

export const Schema = (): Record<string, Record<IsThing, () => any>> & { getSchema: () => SchemaStructure } => {
  const data: SchemaStructure = {};

  const innerProxyHandler: ProxyHandler<{}> = {
      get: (_, prop: string) => {
          return () => {
              if (typeof prop === 'string' && prop.startsWith("is")) {
                  const type = prop.substring(2) as Thing; // Remove 'is' prefix and assert as Thing
                  data[currentKey].is = type;
              }
              return outerProxy; // For chaining
          };
      }
  };

  let currentKey = '';

  // Define the proxy handler for the outer proxy
  const outerProxyHandler: ProxyHandler<{}> = {
      get: (_, prop: string) => {
          if (prop === 'getSchema') {
              return () => data; // Provide getSchema directly
          }

          currentKey = prop;
          if (!data[prop]) data[prop] = {};
          return new Proxy({}, innerProxyHandler);
      }
  };

  // Create the outer proxy without an initial object, and use a type assertion
  const outerProxy = new Proxy({}, outerProxyHandler) as Record<string, Record<IsThing, () => any>> & { getSchema: () => SchemaStructure };

  return outerProxy;
};



it('should be chainable', () => {
  const result = Schema()
    .API.isWebAPI()
    .Endpoint.isEntryPoint()
    .Resource.isDataset()

  expect(result.getSchema()).toMatchInlineSnapshot(`
    {
      "API": {
        "is": "WebAPI",
      },
      "Endpoint": {
        "is": "EntryPoint",
      },
      "Resource": {
        "is": "Dataset",
      },
    }
  `)
})