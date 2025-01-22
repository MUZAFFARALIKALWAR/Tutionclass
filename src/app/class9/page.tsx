"use client"

import { CarouselSize } from '@/components/carosel';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Comment_section from './comment';

interface Iproducts{
    name: string,
    id: number,
    image: string[],
    price: number
}

function ProductList() {

const [product,setproducts] = useState<Iproducts | any>();
const [loading,setLoading] = useState(true);
const [error,seterror] = useState<string | null>();

useEffect(()=>{
    const fetchdata = async ()=>{  
    try{
        setLoading(true)
        const data = await client.fetch(`*[_type == 'product']`)
         if(data && data.length > 0){
            setproducts(data)
         }else{
            seterror("Product Not fount")
         }
    }catch(error){
      seterror("An error OCCURED WHILE FECTING THE PRODUCTS. ")
    }finally{
       setLoading(false)
    }
    }
    fetchdata()
},[])
 
 if(error){
    return <div className='text-center mt-10 text-red-500'>{error}</div>
 }
  if(loading){
    return <div className='text-black text-center font-bold text-2xl'>Loading...</div>
  }




  return (
    <div className='w-full  flex flex-col justify-center items-center mt-20'>
    <div className='flex flex-col md:flex-row justify-center items-center space-x-4'>
     {
        product.map((item:any,i:any)=>{
         return(
             <div key={i} className=' '>
             <Link href={`/class6/${item.price}`}>
             <Image src={urlFor(item.image).url()}
             className='w-[200px] h-[200px] md:w-[290px] md:h-[290px] rounded-md mt-5'
             alt={item.name} width={200} height={200}></Image>
             </Link>
               <h1 className=' font-bold mt-2'>{item.name}</h1>
               <p className='font-bold'>${item.price}</p>
             </div>
         )
        })
     }
    </div>
    <CarouselSize/>
    <Comment_section/>
</div>
  )
}

export default ProductList