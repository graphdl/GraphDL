export Type Database = {
  _id: string
  _name: string
  _icon: string
  _defaultId?: string
  [string]: Model
}



export Type Model = {
  _id: string
  _name: string
  _icon: string
  
}

export Type PropertyTypes = 'string' | 'date' |  'datetime' | 'timestamp' | 'markdown' | 'json'
export Type Property = PropertyTypes | `[${PropertyTypes}]` | `${PropertyTypes}!` 

export const database = init => {
  const { _id, _name, _icon = '■', ...collections } = init
  return {
    id: _id ?? init._name ? slugify(init._name) : Math.random().toString(36).substring(2,7),
    name,
    icon,
    collections
  }
}
