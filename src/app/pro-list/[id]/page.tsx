
"use client"
import Counter from '@/app/class8/page'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


interface IProduct{
  imgurl:string,
  title:string,
  price:number,
  des:string
  id:number
}

const products:IProduct[] = [
{
  imgurl:"/product1.svg",
   title:"T-SHIRT WITH TAPE DETAILS",
    des:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
   id:1,
   price:100,
},
{
  imgurl:"/profile.png",
   title:"T-SHIRT WITH TAPE DETAILS",
   des:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
   id:2,
   price:100,
},
{
  imgurl:"/sell4.png",
   title:"T-SHIRT WITH TAPE DETAILS",
    des:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
   id:3,
   price:100,
},
{
  imgurl:"/sell3.png",
   des:"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
   title:"T-SHIRT WITH TAPE DETAILS",
   id:4,
   price:100,
}]



function Pro_detail({params}:{params:{id:string}}) {
  

  const item = products.find((id)=>id.id === Number(params.id))
    if(!item){
      return <h2 className='text-2xl font-bold'>Product Not Found</h2>
    }
  return (
    <>
    <div className='w-full h-[700px] mt-10 flex flex-col md:flex-row justify-center items-start'>

       <Image src={item.imgurl} 
        alt={item.title}
        className='w-[400px]'
        width={200} height={200}></Image>
        <div className='ml-5 space-y-3'>
        <h1 className='text-2xl font-bold '>{item.title}</h1>
        <p className='font-bold'>${item.price}</p>
        <p className=''>${item.des}</p>
       
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
     <Counter/>
    </>
  )
}

export default Pro_detail