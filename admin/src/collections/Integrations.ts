import { CollectionConfig, GlobalConfig } from 'payload/types'

export const Integrations: GlobalConfig = {
  slug: 'integrations',
  label: '⬮ Integrations',
  admin: { group: 'Admin', hidden: true },
  // labels: { singular: '巛 Integration', plural: '巛 Integrations' },
  // admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}