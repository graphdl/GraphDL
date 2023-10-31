import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: '▽ User', plural: '▽ Users' },
  auth: true,
  admin: { group: '▼ Auth', useAsTitle: 'email' },
  fields: [

  ],
}