import { GlobalConfig } from 'payload/types'

export const API: GlobalConfig = {
  slug: 'api',
  admin: { group: '∴ Admin' },
  label: '❴❵ API',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}