import * as React from "react"

import { Card, CardContent } from "@/components/ui/card";

interface IRivew{
    name:string,
    des:string
    id:number
}
const reviw:IRivew[] = [
    {
        name:"Muzafafr",
        des:" style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        id:1,
    },
    {
        name:"Hussain",
        des:" style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        id:2,
    },
    {
        name:"Khan",
        des:" style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        id:3,
    },
    {
        name:"Nafay",
        des:" style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        id:4,
    },
    {
        name:"Khan",
        des:" style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions",
        id:5,
    }
]

let star =  [
    <FaStar key={0}/>,
    <FaStar key={1}/>,
    <FaStar key={2}/>,
    <FaStar key={3}/>,
]




import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaStar } from "react-icons/fa";

export function CarouselSize() {
  return (
      <div className="w-full  flex justify-center items-center mt-10 mb-[100px] ">
          <Carousel className="w-[80%]  ">
        <CarouselContent >
           {
            reviw.map((item)=>{
                return (
                    <CarouselItem  className="md:basis-1/2 lg:basis-1/3 ">
                    <div className="p-1">
                      <Card className="w-[300px]">
                        <CardContent className="flex flex-col p-4">
                            <p className="flex text-yellow-400">{star}</p>
                            <h1 className="font-bold">{item.name}</h1>
                            <p className="text-sm mt-2">{item.des}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
            })
           }
        </CarouselContent>
        <CarouselPrevious  className="hidden md:block"/>
        <CarouselNext className="hidden md:block"/>
      </Carousel>
      </div>
  )
}
