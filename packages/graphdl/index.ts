export type Schema = {
  name: string
  props: {
    [string]?: string | float | int | boolean
  }
}

export type Relationship<T> = string