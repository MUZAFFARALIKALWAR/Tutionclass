import { CarouselSize } from '@/components/carosel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface IProduct{
    imgurl:string,
    title:string,
    price:number,
    id:number
}

const products = [
 {
    imgurl:"/product1.svg",
     title:"T-SHIRT WITH TAPE DETAILS",
     id:1,
     price:100,
},
{
    imgurl:"/profile.png",
     title:"T-SHIRT WITH TAPE DETAILS",
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





function PorductList() {
 
  
  return (
    <div className='w-full  flex flex-col justify-center items-center mt-20'>
           <div className='flex flex-col md:flex-row justify-center items-center space-x-4'>
            {
               products.map((item,i)=>{
                return(
                    <div key={i} className=' '>
                    <Link href={`/pro-list/${item.id}`}>
                    <Image src={item.imgurl} className='w-[200px] h-[200px] md:w-[290px] md:h-[290px] rounded-md mt-5' alt={item.title} width={100} height={100}></Image>
                    </Link>
                      <h1 className=' font-bold mt-2'>{item.title}</h1>
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

export default PorductList