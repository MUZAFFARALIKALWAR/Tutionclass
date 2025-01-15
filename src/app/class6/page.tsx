import { CarouselSize } from '@/components/carosel'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Iproducts{
    name: string,
    id: number,
    image: string[],
    price: number
}


async function Class6() {

 const res:Iproducts[] =await  client.fetch(`*[_type == 'product']{
    name,
    description,
      price,
      sizes,
      image
  }[0..3] `)

  return (
    <div className='w-full  flex flex-col justify-center items-center mt-20'>
           <div className='flex flex-col md:flex-row justify-center items-center space-x-4'>
            {
               res.map((item,i)=>{
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
    </div>
  )
}

export default Class6
//      <Image src={urlFor(item.image).url()} alt={item.name} width={200} height={200}></Image>
