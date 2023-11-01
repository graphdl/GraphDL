import { GlobalConfig } from 'payload/types'

export const Docs: GlobalConfig = {
  slug: 'docs',
  admin: { group: '❮❯ Web', hidden: true },
  label: '☱ Docs',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}