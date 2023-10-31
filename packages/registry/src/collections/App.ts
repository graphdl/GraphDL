import { GlobalConfig } from 'payload/types'

export const App: GlobalConfig = {
  slug: 'app',
  admin: { group: '❮❯ Web' },
  label: '⧉ App',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}