import { GlobalConfig } from 'payload/types'

export const Site: GlobalConfig = {
  slug: 'site',
  admin: { group: '❮❯ Web' },
  label: '☶ Site',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}