export type Database = {
  _id: string
  _name: string
  _icon: string
  _defaultId?: string
  [key: string]: string | undefined | Model
}



export type Model = {
  _id: string
  _name: string
  _icon: string
  
}

export type PropertyTypes = 'string' | 'date' |  'datetime' | 'timestamp' | 'markdown' | 'json'
export type Property = PropertyTypes | `[${PropertyTypes}]` | `${PropertyTypes}!` 

export const database = init => {
  const { _id, _name, _icon = '■', ...collections } = init
  return {
    id: _id ?? init._name ? slugify(init._name) : Math.random().toString(36).substring(2,7),
    name,
    icon: _icon,
    collections
  }
}

const slugify = text => text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')