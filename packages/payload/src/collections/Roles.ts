import { CollectionConfig } from 'payload/types'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: { singular: '▼ Role', plural: '▼ Roles' },
  admin: { group: '■● Graph', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}