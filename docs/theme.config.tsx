import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div>■●■ Graph<span className='font-bold'>DL</span></div>,
  project: {
    link: 'https://github.com/graphdl/graphdl',
  },
  chat: {
    link: 'https://discord.gg/NhYuABP9',
  },
  docsRepositoryBase: 'https://github.com/graphdl/graphdl/tree/master/docs',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: `Copyright ${new Date().getFullYear()} GraphDL.org`,
  },
}

export default config
