import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface Iproducts{
    name: string,
    id: number,
    image: string,
    price: number,
    description:string
}



async function ProDetail({params}:{params:{id:string}}) {
    
     
     const data :Iproducts[] =await  client.fetch(`*[_type == 'product']{
        name,
        id,
        description,
          price,
          sizes,
          image
      }[0..3] `)

    const item = data.find((item:any)=>item.price == Number(params.id))
 

  return (
    <div className='w-full h-[700px] mt-10 flex flex-col md:flex-row justify-center items-start'>
         {
            item?.image && 
            
       <Image src={urlFor(item?.image).url()} 
       alt={item?.name}
       className='w-[400px]'
       width={200} height={200}></Image>
         }
        <div className='ml-5 space-y-3'>
        <h1 className='text-2xl font-bold '>{item?.name}</h1>
        <p className='font-bold'>${item?.price}</p>
        <p className=''>${item?.description}</p>
       
        <div className='space-x-3 flex'>
        <button className='w-[37px] h-[37px] rounded-full bg-green-400 group flex justify-center items-center'>
          <Check className='opacity-0 group-hover:opacity-100 text-white'/>
        </button>
        <button className='w-[37px] h-[37px] rounded-full bg-black group flex justify-center items-center'>
          <Check className='opacity-0 group-hover:opacity-100 text-white'/>
        </button>
        <button className='w-[37px] h-[37px] rounded-full bg-blue-400 group flex justify-center items-center'>
          <Check className='opacity-0 group-hover:opacity-100 text-white'/>
        </button>
        </div>

       <Button>Add to cart</Button>
        </div>
    </div>
  )
}

export default ProDetail