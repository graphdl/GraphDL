import { GlobalConfig } from 'payload/types'

export const SDK: GlobalConfig = {
  slug: 'sdk',
  admin: { group: '∴ Admin', hidden: true },
  label: '❪❫ SDK',
  fields: [
    { type: 'text', name: 'domain' },
  ],
}