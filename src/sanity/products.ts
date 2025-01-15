// sanity/pet.ts
export default {
    name: 'produtcs1',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'id',
            type: 'number',
            title: 'Product _id'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        }

    ]
}