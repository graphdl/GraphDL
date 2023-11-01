import { CollectionConfig } from 'payload/types'

export const Webhooks: CollectionConfig = {
  slug: 'webhooks',
  labels: { singular: 'Webhook', plural: '❴❵ Webhooks' },
  admin: { group: '⟢ Stream', useAsTitle: 'name', hidden: true },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}