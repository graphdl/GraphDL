import { CollectionConfig } from 'payload/types'

export const Functions: CollectionConfig = {
  slug: 'functions',
  labels: { singular: '() Function', plural: '() Functions' },
  auth: true,
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { type: 'text', name: 'name', required: true },
  ],
}