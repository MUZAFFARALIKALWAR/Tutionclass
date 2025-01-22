import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export default  function Header(){
  return (
          <div className="flex bg-green-400 justify-between items-center h-[70px] p-5 max-w-screen-2xl mx-auto">
             {/* logo */}
             <div>
               <h1 className="text-4xl font-bold">MA.</h1>
             </div>
             {/* Navlinks*/}
             <ul className="pr-5 hidden md:block">
               <li className="space-x-5">
                <Link href={"/"}>Home</Link>
                <Link href={"/class8"}>class8</Link>
                <Link href={"/pro-list"}>Pro-List</Link>
                <Link href={"/class9"}>class9</Link>
                <Button variant={"outline"} className="bg-yellow-300">Hire Me!</Button>
               </li>
             </ul>
               <div className="md:hidden">
               <Sheet>
  <SheetTrigger className="md:hidden">
     <GiHamburgerMenu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Muzaffar</SheetTitle>
      <SheetDescription>
           <ul className="pr-5 ">
               <li className="flex flex-col gap-y-5">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={""}>Contact</Link>
                <Link href={""}>Blog</Link>
                <Button variant={"outline"} className="bg-yellow-300">Hire Me!</Button>
               </li>
             </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
 
               </div>
          </div>
  )
}
