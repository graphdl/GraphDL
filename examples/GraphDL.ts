import { createGraph } from '../packages/core/index'

export const GraphDL = createGraph({
  nouns: {
    Noun: { is: 'Thing', in: 'Graph' },
    Verb: { is: 'Action', by: 'Subject', to: 'Object', in: 'Graph' },
    Graph: { is: 'Collection', of: 'Nouns', with: 'Verbs' },
    Subject: { is: 'Noun', doing: 'Verb', to: 'Object' },
    Object: { is: 'Noun', with: 'Subject', doing: 'Verb', to: 'Object' },
    Resource: { isInstanceOf: 'Noun', with: 'Properties', as: 'Data', in: 'Database' },
    Action: { is: 'Action', by: 'Actor', to: 'Resource' },
    Trigger: { isInstanceOf: 'Code' },
    Event: { isInstanceOf: 'Action', with: 'Actor', doing: 'Action', to: 'Resource' },
    Code: { is: 'SoftwareSourceCode', in: ['JavaScript','TypeScript'] },
    JavaScript: { isInstanceOf: 'SoftwareLanguage' },
    TypeScript: { isInstanceOf: 'SoftwareLanguage', with: 'Types', for: 'JavaScript' },
    Type: { is: 'Code', with: 'Properties', of: 'Noun' },
    User: { is: 'Person', with: 'Role', in: 'Tenant' },
    Account: { is: 'Thing', with: 'User', in: 'Tenant' },
    Tenant: { is: 'Organization', with: 'Users' },
  },
  verbs: {
    User: { Creates: { Account: { in: 'Tenant' } } },
  },
  story: {
    hero: { is: 'Developer', building: 'App' },
    problem: {
      external: 'Needs to build a new app or API',
      internal: 'Not sure how to get started',
      philosophical: 'Start from scratch, or use a framework?',
      villian: 'Time',
    },
    guide: { is: 'GraphDL', a: 'Rapid Data Modeling and App/API Development Framework' },
    plan: {
      step1: 'Define your Nouns as Schema.org Things',
      step2: 'Express the Actions performed by and to your Nouns as Verbs',
      step3: `Use your new App & API - it's already built!  🚀`,
    },
    action: {
      primary: 'Run `npx create-graphdl` to try it now!',
      secondary: 'Visit https://graphdl.org to learn more'
    },
    failure: 'You will have to build your app and API from scratch',
    stakes: 'Time, money, and energy',
    success: 'Launch your app and API in minutes, not months',
    transformation: { from: 'Stuck', to: 'Done' },
  },
})
