import { CollectionConfig } from 'payload/types'

export const Components: CollectionConfig = {
  slug: 'ui',
  labels: { singular: 'Component', plural: '❮❯ Components' },
  admin: { group: '❪❫ Code', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}