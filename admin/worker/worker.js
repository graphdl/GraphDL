import { API, json, withCookies } from 'edge-api'
import { withContext } from 'edge-api/middleware'
import { sha1, staleWhileRevalidate, swrFetch } from 'edge-api/utils'
import { withUser } from 'edge-api/jwt'
import camelCase from 'camelcase'
// import { withDB } from 'edge-api/mongo'

export const api = API({
  domain: 'graphdl.org',
  description: '🚀 AI-Powered SaaS for SaaS',
  url: 'https://api.graphdl.org',
  docs: 'https://graphdl.org',
  site: 'https://graphdl.org',
  // base: '/api',
})


// withAIGateway({ account: 'a826340b3b93189c9ebb7c0eaeba3c46', gateway: 'svc' }), 

const links = {
  'Access': 'https://api.graphdl.org/access',
  'Health Check': 'https://api.graphdl.org/health',
}

const getRelationships = (fields) => {
  // console.log({ fields })
  const relationships = []
  fields?.map(field => {
    if (field.type === 'row') {
      relationships.push(getRelationships(field.fields))
    } else if (field.type === 'tabs') {
      field.tabs?.map(tab => relationships.push(getRelationships(tab.fields)))
    } else if (field.type === 'relationship') {
      relationships.push(field)
    }
  })
  return relationships.flat()
}

const linkRelationships = (collection, doc) => {
  const relationships = getRelationships(config[collection]?.fields)
  relationships?.map(field => {
    if (doc[field.name]?.id) {
      doc[field.name].id = origin + '/' + field.relationTo + '/' + doc[field.name].id
      doc = linkRelationships(field.relationTo, doc[field.name])
    }
  })
  return doc
}

let config

api
  .all('*', withCookies, staleWhileRevalidate, async (req, env, ctx) => {
      const jwt = req.cookies['auth-token']
      const { email } = jwt ? JSON.parse(atob(jwt.split('.')[1])) : {}
      req.user = { email, account: email ? 'https://graphdl.org/admin' : undefined, ...req.user }
      req.jwt = jwt
      if (!config) {
        config = await req.swrFetch('https://graphdl.org/api/_cfg', { cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json())
      } else {
        ctx.waitUntil(req.swrFetch('https://graphdl.org/api/_cfg', { cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json()).then(cfg => config = cfg))
      }

  })
  .get('/', async ({ origin, swrFetch }) => {
    // const data = await swrFetch('https://graphdl.org/api/access', { cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json())
    const nav = {
      api: {
        'graphdl.org': origin,
      },
      app: {
        'graphdl.org': 'https://graphdl.org/admin',
      },
    }
    const collections = {}
    Object.keys(config.collections).map((name) => collections[config.collections[name].config.labels.plural ?? name] = 'https://api.graphdl.org/' + name)
    return { nav, collections }
  })
  .get('/config', () => ({ config }))
  .get('/api', (req) => {
    withCookies
    const { cookies } = req
    const headers = Object.fromEntries(req.headers)
    return { links: {
      'Health Check': 'https://graphdl.org/api/health',
      'Debug': 'https://graphdl.org/api?_debug',
    }, cookies }
  })
  .all('/swr/*', ({ url, method, content, headers, swrFetch }) => swrFetch(url.replace('/swr/','/'), { method, body: content ? JSON.stringify(content) : undefined, cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json()))
  
  .all('/:collection', async ({ collection, origin, url, method, content, headers, pathname, search, query, swrFetch }) => {
    // const data = await swrFetch('https://graphdl.org/api' + pathname + search , { method, body: content ? JSON.stringify(content) : undefined, headers, cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json())
    const meta = config.collections[collection]?.config
    const relationships = getRelationships(meta?.fields)
    const data = await fetch('https://graphdl.org/api' + pathname + search , { method, body: content ? JSON.stringify(content) : undefined, headers }).then(res => res.json())
    const mergeQuery = obj => origin + pathname + '?' + new URLSearchParams({ ...query, ...obj }).toString()
    const nav = {
      api: {
        'graphdl.org': origin,
        [meta?.labels?.plural]: origin + '/' + collection,
      },
      app: {
        'graphdl.org': 'https://graphdl.org/admin',
        [meta?.labels?.plural]: 'https://graphdl.org/admin/collections/' + collection,
      },
    }
    const links = {
      first: data.totalPages ? mergeQuery({ page: 1 }) : undefined,
      next: data.nextPage ? mergeQuery({ page: data.nextPage }) : undefined,
      prev: data.prevPage ? mergeQuery({ page: data.prevPage }) : undefined,
      last: data.totalPages ? mergeQuery({ page: data.totalPages ?? 1 }) : undefined,
      more: data.limit < 10000 && data.hasNextPage ? mergeQuery({ limit: data.limit * 10 }) : undefined,
      less: data.limit > 1 ? mergeQuery({ limit: data.limit / 10 }) : undefined,
    }
    data?.docs?.map(doc => {
      doc.id = origin + '/' + collection + '/' + doc.id
      relationships?.map(field => {
        if (doc[field.name]?.id) {
          doc[field.name].id = origin + '/' + field.relationTo + '/' + doc[field.name].id
          doc[field.name] = linkRelationships(field.relationTo, doc[field.name])
        }
      })
    })
    return { collection, query, nav, links, [camelCase(meta?.labels?.plural)]: data.docs } // , relationships, meta }
  })
  .all('/:collection/:id', async ({ collection, id, origin, url, method, content, headers, pathname, search, query, swrFetch }) => {
    const meta = config.collections[collection]?.config
    // const data = await swrFetch('https://graphdl.org/api' + pathname + search , { method, body: content ? JSON.stringify(content) : undefined, headers, cf: { cacheEverything: true, cacheTtl: 1 } }).then(res => res.json())
    const data = await fetch('https://graphdl.org/api' + pathname + search , { method, body: content ? JSON.stringify(content) : undefined, headers }).then(res => res.json())
    const mergeQuery = obj => origin + pathname + '?' + new URLSearchParams({ ...query, ...obj }).toString()
    const nav = {
      api: {
        'graphdl.org': origin,
        [meta?.labels?.plural]: origin + '/' + collection,
        [data[meta.admin?.useAsTitle] ?? id]: origin + '/' + collection + '/' + id,
      },
      app: {
        'graphdl.org': 'https://graphdl.org/admin',
        [meta?.labels?.plural]: 'https://graphdl.org/admin/collections/' + collection,
        [data[meta.admin?.useAsTitle] ?? id]: 'https://graphdl.org/admin/collections/' + collection + '/' + id,
      },
    }
    data.id = origin + '/' + collection + '/' + data.id
    // TODO: link relationships - need to refactor collection to collection relationships to be pre-calculated, and map by field name
    return { nav, collection, id, [camelCase(meta?.labels?.singular)]: data }
  })
  .all('*', async ({ origin, url, method, content, headers }) => {
    const data = await fetch(url, { method, body: content ? JSON.stringify(content) : undefined, headers }).then(res => res.json())
    const links = {
      home: origin,

    }
    return { links, ...data }
  })
  

  // .get('/:input', async ({ input, query, user }, { db, terms, openai }) => {
  //   let result
  //   // let [ vector ] = await terms.getByIds([ input ])
  //   let [ vector ] = await db.getByIds([ input ])
  //   if (!vector) {
  //     const embedding = await openai.embeddings.create({ input, model: 'text-embedding-ada-002' })
  //     vector = { id: input, values: embedding.data[0].embedding, metadata: { createdAt: new Date(), createdBy: user.email, createdIn: user.requestId } }
  //     // result = await terms.upsert([ vector ])
  //     result = await db.upsert([ vector ])
  //   }
  //   let { count, matches } = await db.query(vector.values, { topK: 10, returnVectors: false })
  //   matches.map(match => {
  //     if (match.vector?.values) {
  //       match.vector.values = undefined
  //     }
  //   })
  //   return { input, count, matches, result }
  // })



export default {
  fetch: (req, env, ctx) => {
    withContext(req, env, ctx)
    const { url, user = null } = req
    // console.log({ url, user })
    return api.fetch(req, env, ctx)
  }
}

