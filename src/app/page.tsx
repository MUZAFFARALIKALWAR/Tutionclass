
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function Home(){
  return (
          // <div className="bg-red-300  sm:bg-green-300 md:bg-blue-300 lg:bg-orange-300 h-screen ">
                 
          // </div>
          <div>
               <Hero/>
               <Projects/>
          </div>

  )
}
export default Home