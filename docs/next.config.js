const mermaid = require('remark-mermaid')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [
      mermaid
    ]
  }
})

module.exports = withNextra()
