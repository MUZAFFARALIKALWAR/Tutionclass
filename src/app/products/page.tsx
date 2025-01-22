"use client"
import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'

interface Iproducts{
    name: string,
    id: number,
    image: string[],
    price: number
}
function ProductsListing() {

const [products,setproducts] = useState<Iproducts | any>(null);
const [error,seterror] = useState<string | null>();
const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const fetchProducts =async ()=>{
            try{
                setLoading(true);
                const data =await client.fetch(`*[_type == 'product']`)
                  if(data && data.length > 0){
                    setproducts(data)

                  }else{
                    seterror("Product not found")
                  }
            }catch(error){
                seterror("An error occurred while fetching the product.");
            }finally{
                setLoading(false)
            }
        }
        fetchProducts()
    },[]) 
   
  if (error) {
    return <div className="text-center mt-10 text-xl text-red-500">{error}</div>;
  }
  
  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }
 
   console.log(products);
   
  return (
    <div>
     {products.map((item:any)=>{
        return <h1>{item.name}</h1>
     })}
    </div>
  )
}

export default ProductsListing