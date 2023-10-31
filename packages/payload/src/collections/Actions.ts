import { CollectionConfig } from 'payload/types'
import { saveYamlAsJson } from '../utilities/saveYamlToJson'

export const Actions: CollectionConfig = {
  slug: 'actions',
  labels: { singular: '○ Action', plural: '○ Actions' },
  admin: { group: '彡 Data',   useAsTitle: 'name' },
  versions: { maxPerDoc: 0 },
  fields: [
    { type: 'row', fields: [
      { type: 'relationship', name: 'subject', relationTo: 'resources', hasMany: false, hidden: true },
      { type: 'relationship', name: 'verb', relationTo: 'verbs', hasMany: false },
      { type: 'relationship', name: 'object', relationTo: 'resources', hasMany: false },
    ]},
    { type: 'json', name: 'data', admin: { hidden: true } },
    { type: 'code', name: 'yaml', label: 'Data', admin: { language: 'yaml', editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, defaultValue: '\n' },
  ],
  hooks: {
    beforeChange: [saveYamlAsJson]
  }
}