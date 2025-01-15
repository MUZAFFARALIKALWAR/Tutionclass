import { type SchemaTypeDefinition } from 'sanity'
import Products from "../products"
import blogs from '../blogs'
import Test from '../Test'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products,blogs,Test],
}

