import { CollectionConfig } from 'payload/types'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: { singular: '◇ Event', plural: '◇ Events' },
  auth: true,
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}