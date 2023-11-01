import { CollectionConfig } from 'payload/types'


export const Verbs: CollectionConfig = {
  slug: 'verbs',
  admin: { group: '■● Graph', useAsTitle: 'name' },
  timestamps: false,
  access: { read: () => true },
  labels: { singular: 'Verb', plural: '● Verbs' },
  fields: [
    { type: 'row', fields: [
      { type: 'relationship', name: 'subject', relationTo: 'nouns', hasMany: false },
      { type: 'text', name: 'verb', required: true, admin: { description: 'The base Verb (ie. Create)' } },
      { type: 'relationship', name: 'object', relationTo: 'nouns', hasMany: false },
    ]},
    { type: 'row', fields: [
      { type: 'text', name: 'action', admin: { description: 'The active tense of the Verb (ie. Creates)' } },
      { type: 'text', name: 'event', admin: { description: 'The past tense of the Verb (ie. Created)' } },
      { type: 'text', name: 'activity', admin: { description: 'The past tense of the Verb (ie. Creating)' } },
    ]},
  ],
}