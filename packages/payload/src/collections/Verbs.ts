import { CollectionConfig } from 'payload/types'


export const Verbs: CollectionConfig = {
  slug: 'verbs',
  admin: { group: '■● Graph', useAsTitle: 'name' },
  timestamps: false,
  access: { read: () => true },
  labels: { singular: 'Verb', plural: '● Verbs' },
  fields: [
    { type: 'text', name: 'name' },
    { type: 'row', fields: [
      { type: 'code', name: 'schema', admin: { language: 'yaml', editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, defaultValue: '\n\n\n' },
      { type: 'code', name: 'code', admin: { language: 'typescript', readOnly: true, editorOptions: { lineNumbers: 'off', padding: { top: 25 }} }, defaultValue: '\n\n\n' },
    ]},
  ],
}