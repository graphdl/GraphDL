import { load } from 'js-yaml'
import { BeforeChangeHook } from 'payload/dist/collections/config/types'

export const saveYamlAsJson: BeforeChangeHook = ({ data }) => {
  data.data = JSON.stringify(load(data.yaml))
  console.log({ data })
  return data
}