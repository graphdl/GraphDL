import { CollectionConfig } from 'payload/types'
import { base62 } from '../utilities/base62'
import { saveYamlAsJson } from '../utilities/saveYamlToJson'


export const Resources: CollectionConfig = {
  slug: 'resources',
  labels: { singular: '□ Resource', plural: '□ Resources' },
  admin: { group: 'Data', useAsTitle: 'name', defaultColumns: ['name', 'type', 'yaml'], listSearchableFields: ['name', 'type', 'resourceId', 'yaml'] },
  versions: { maxPerDoc: 0 },
  fields: [
    { type: 'relationship', name: 'type', relationTo: 'nouns', hasMany: false, admin: { position: 'sidebar', readOnly: true } },
    { type: 'text', name: 'resourceId', label: 'ID', defaultValue: () => base62(8), admin: { position: 'sidebar', readOnly: true } },
    { type: 'text', name: 'name', admin: { position: 'sidebar', readOnly: true } },
    { type: 'json', name: 'data', admin: { hidden: true } },
    { type: 'code', name: 'yaml', label: 'Data', admin: { language: 'yaml', editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, }, 
    { type: 'relationship', name: 'subjectOf', relationTo: 'actions', hasMany: true },
    { type: 'relationship', name: 'objectOf', relationTo: 'actions', hasMany: true },
  ],
  hooks: {
    beforeChange: [
      saveYamlAsJson
    ]
  }
}
