import { CollectionConfig } from 'payload/types'

export const UI: CollectionConfig = {
  slug: 'ui',
  labels: { singular: '吕 UI', plural: '吕 UI' },
  admin: { group: 'Code', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}