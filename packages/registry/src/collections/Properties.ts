import { CollectionConfig } from 'payload/types'

export const Properties: CollectionConfig = {
  slug: 'properties',
  labels: { singular: '∷ Property', plural: '∷ Properties' },
  admin: { group: '■● Graph', useAsTitle: 'name', hidden: true },
  fields: [
    { type: 'text', name: 'name', required: true },
    { type: 'relationship', name: 'nouns', relationTo: 'nouns', hasMany: true },
  ],
}