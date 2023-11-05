import { Nouns } from '.'

export const createGraph = <N extends Nouns<N>>(nouns: N) => nouns
