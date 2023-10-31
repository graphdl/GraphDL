import { GlobalConfig } from 'payload/types'

export const Docs: GlobalConfig = {
  slug: 'docs',
  admin: { group: '❮❯ Web' },
  label: '☱ Docs',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}