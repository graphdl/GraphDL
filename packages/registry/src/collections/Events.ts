import { CollectionConfig } from 'payload/types'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: { singular: 'Event', plural: '◇ Events' },
  admin: { group: '❴❵ Data', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}