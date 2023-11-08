import { createGraph } from '../packages/core/index'

export const Automotive = createGraph({
  nouns: {
    Noun: { is: 'Thing' },
    Verb: { is: 'Action', by: 'Subject', to: 'Object', with: '[Noun]' },
    Subject: { is: 'Noun' },
    Object: { is: 'Noun' },
    Resource: { is: '' }
  }
})
