import { CollectionConfig } from 'payload/types'

export const Functions: CollectionConfig = {
  slug: 'functions',
  labels: { singular: '入 Function', plural: '入 Functions' },
  admin: { group: 'Code', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}