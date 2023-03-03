import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>■●■ Graph<span className='bold'>DL</span></span>,
  project: {
    link: 'https://github.com/graphdl/graphdl',
  },
  chat: {
    link: 'https://discord.gg/NhYuABP9',
  },
  docsRepositoryBase: 'https://github.com/graphdl/graphdl/tree/master/docs',
  footer: {
    text: `Copyright ${new Date().getFullYear()} GraphDL.org`,
  },
}

export default config
