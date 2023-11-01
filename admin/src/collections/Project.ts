import { GlobalConfig } from 'payload/types'

export const Project: GlobalConfig = {
  slug: 'project',
  admin: { group: '∴ Admin' },
  // label: '∴ Project',
  label: '■● Graph',
  // label: '∴ Graph',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}