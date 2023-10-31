import { CollectionConfig } from 'payload/types'

export const UI: CollectionConfig = {
  slug: 'ui',
  labels: { singular: '<> UI', plural: '<> UI' },
  auth: true,
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}