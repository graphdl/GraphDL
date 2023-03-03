const fs = require('fs')
const glob = require('glob')
const yaml = require('yaml')

const yamlFiles = Object.fromEntries(glob.globSync('../graphdl/**/*.yaml').map(file => {
  try {
    return [file.replace('../graphdl/', '').replace('.yaml', ''), yaml.parse(fs.readFileSync(file, 'utf8'))]
  } catch (error) {
    console.error(error)
  }
}).filter((f) => f))
const schema = { ...yamlFiles }

console.log(schema)

fs.writeFileSync('./public/schema.json', JSON.stringify(schema, null, 2))