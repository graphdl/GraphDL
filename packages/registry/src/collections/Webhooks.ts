import { CollectionConfig } from 'payload/types'

export const Webhooks: CollectionConfig = {
  slug: 'webhooks',
  labels: { singular: 'Webhook', plural: '❴❵ Webhooks' },
  admin: { group: '⟢ Stream', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}