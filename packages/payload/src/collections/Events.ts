import { CollectionConfig } from 'payload/types'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: { singular: '◇ Event', plural: '◇ Events' },
  admin: { group: '彡 Data', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}