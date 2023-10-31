import { CollectionConfig } from 'payload/types'


export const Nouns: CollectionConfig = {
  slug: 'nouns',
  admin: { group: '■● Graph', useAsTitle: 'name' },
  labels: { singular: 'Noun', plural: '■ Nouns' },
  timestamps: false,
  access: { read: () => true },
  fields: [
    { type: 'row', fields: [
      { type: 'text', name: 'name' },
      { type: 'relationship', name: 'type', relationTo: 'nouns', hasMany: true },
    ]},
    { type: 'row', fields: [
      { type: 'code', name: 'schema', admin: { language: 'yaml', editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, defaultValue: '\n\n\n' },
      { type: 'code', name: 'code', admin: { language: 'typescript', readOnly: true, editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, defaultValue: '\n\n\n' },
    ]},
    { type: 'relationship', name: 'subjectOf', relationTo: 'verbs', hasMany: true },
    { type: 'relationship', name: 'objectOf', relationTo: 'verbs', hasMany: true },
    // { type: 'relationship', name: 'properties', relationTo: 'properties', hasMany: true },
  ],
}