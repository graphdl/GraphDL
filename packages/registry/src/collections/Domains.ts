import { CollectionConfig } from 'payload/types'

export const Domains: CollectionConfig = {
  slug: 'domains',
  labels: { singular: 'Host', plural: '∷ Hosts' },
  admin: { group: '❮❯ Web', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}