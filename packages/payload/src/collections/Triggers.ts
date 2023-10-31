import { CollectionConfig } from 'payload/types'

export const Triggers: CollectionConfig = {
  slug: 'triggers',
  labels: { singular: '◆ Trigger', plural: '◆ Triggers' },
  admin: { group: '■● Graph', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
    { type: 'relationship', name: 'functions', relationTo: 'functions', hasMany: true },
  ],
}