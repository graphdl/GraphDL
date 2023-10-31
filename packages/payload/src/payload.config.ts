import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import { Logo } from './components/logo'

import { Actions } from './collections/Actions'
import { Nouns } from './collections/Nouns'
import { Resources } from './collections/Resources'
import { Users } from './collections/Users'
import { Verbs } from './collections/Verbs'
import { Triggers } from './collections/Triggers'
import { Events } from './collections/Events'
import { Properties } from './collections/Properties'
import { Tenants } from './collections/Tenants'
import { Roles } from './collections/Roles'
import { Functions } from './collections/Functions'
import { UI } from './collections/UI'
import { Graphs } from './collections/Graphs'
import { Integrations } from './collections/Integrations'
import { Settings } from './collections/Settings'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    css: path.resolve(__dirname, 'styles.css'),
    autoLogin: { email: 'demo@graphdl.org', password: 'demo' },
    components: { graphics: { Logo, Icon: Logo }},
  },
  editor: slateEditor({}),
  collections: [
    Graphs,
    Nouns,
    Verbs,
    Properties,
    Resources,
    Actions,
    Triggers,
    Events,
    Functions,
    UI,
    Tenants,
    Roles,
    Users,
    Integrations,
  ],
  globals: [Settings],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
