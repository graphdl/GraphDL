import { CollectionConfig } from 'payload/types'

export const Graphs: CollectionConfig = {
  slug: 'graphs',
  labels: { singular: 'Graph', plural: '■● Graphs' },
  admin: { group: '❮❯ UI', useAsTitle: 'name', hidden: true },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}