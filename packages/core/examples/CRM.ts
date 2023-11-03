import { createGraph } from '../graph'

export default createGraph({
  nouns: {
    Company: 'Organization',
    Customer: 'Company',
    Contact: 'Person',
    Deal: 'SellAction',
    Lead: 'Person',
  },
  verbs: {

  }
})