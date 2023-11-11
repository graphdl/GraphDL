import { Things, ThingProperties, Activities, Prepositions } from './things'
import { Thing as SchemaThing } from './schema'

type PrepositionOrActivity = Prepositions | Activities;

interface SchemaFinalizer {
    toNouns: () => string[];
}

// A type that alternates between PrepositionOrActivity and Things
type AlternatingChain = {
    [K in PrepositionOrActivity]: ThingChain;
} & SchemaFinalizer;

type ThingChain = {
    [K in Things]: AlternatingChain & (() => AlternatingChain);
};

interface IsProxy {
    is: ThingChain;
}

type ChainProxy = {
    [key: string]: IsProxy & (() => IsProxy);
} & SchemaFinalizer;

export function Schema(): ChainProxy {
    let paths: string[] = [];
    let currentPath: string[] = [];

    const handler: ProxyHandler<any> = {
        get(target, prop: string) {
            if (prop === 'toNouns') {
                const pathString = currentPath.join('.');
                currentPath = []; // Reset current path
                return () => pathString ? [...paths, pathString] : [...paths];
            }

            currentPath.push(prop);
            return new Proxy(() => {}, handler);
        },
        apply(target, thisArg, argumentsList) {
            const pathString = currentPath.join('.');
            paths.push(pathString);
            currentPath = [];
            return new Proxy(() => {}, handler);
        }
    };

    return new Proxy(() => {}, handler);
}