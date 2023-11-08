export const stringify = (value: object) => {
  return JSON.stringify(value, (key, val) => {
    if (typeof val === 'function') {
      return val.toString()
    }
    return val
  }, 2)
}