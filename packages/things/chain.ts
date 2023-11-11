import { Things, ThingProperties, Activities, Prepositions } from './things'
import { Thing as SchemaThing } from './schema'

type PrepositionOrActivity = Prepositions | Activities;

type AlternatingChain = {
    [K in PrepositionOrActivity | string]: ThingChain;
}

type ThingChain = {
    [K in Things | string]: AlternatingChain & (() => AlternatingChain);
};

interface IsProxy {
    is: ThingChain;
}

type ChainProxy = Record<string, IsProxy & (() => IsProxy)>;

export function Schema(): ChainProxy & { getPaths: () => any } {
    let paths: Record<string, any> = {};
    let currentKey: string | null = null;
    let currentObject: Record<string, string> = {};
    let lastKey: string | null = null;

    const handler: ProxyHandler<any> = {
        get(target, prop: string) {
            if (prop === 'getPaths') {
                if (currentKey !== null) {
                    paths[currentKey] = { ...currentObject };
                }
                return () => ({ ...paths });
            }

            if (lastKey !== null) {
                currentObject[lastKey] = prop;
                lastKey = null;
            } else {
                if (currentKey === null) {
                    currentKey = prop;
                    currentObject = {};
                } else {
                    lastKey = prop;
                }
            }

            return new Proxy(() => {}, handler);
        },
        apply(target, thisArg, argumentsList) {
            if (currentKey !== null) {
                paths[currentKey] = { ...currentObject };
            }
            currentKey = null;
            lastKey = null;
            return new Proxy(() => {}, handler);
        },
    };

    return new Proxy(() => {}, handler);
}