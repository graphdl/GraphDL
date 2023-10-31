import { CollectionConfig } from 'payload/types'

export const Integrations: CollectionConfig = {
  slug: 'integrations',
  labels: { singular: '巛 Integration', plural: '巛 Integrations' },
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}