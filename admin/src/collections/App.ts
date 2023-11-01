import { GlobalConfig } from 'payload/types'

export const App: GlobalConfig = {
  slug: 'app',
  admin: { group: '∴ Admin' },
  label: '⧉ App',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}