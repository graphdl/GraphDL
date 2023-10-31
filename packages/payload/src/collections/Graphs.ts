import { CollectionConfig } from 'payload/types'

export const Graphs: CollectionConfig = {
  slug: 'graphs',
  labels: { singular: '■● Graph', plural: '■● Graphs' },
  auth: true,
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}