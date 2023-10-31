import { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: { group: 'Admin' },
  label: '⚙ Settings',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}