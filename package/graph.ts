export type Graph = {
    [string]: Node
}

export type Node = {
    [string]: bool | string | number | string[] | number[] | Edge<T>
}

export type Edge<T> = string