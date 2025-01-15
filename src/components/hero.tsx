import Image from "next/image"
import { Button } from "./ui/button"


function Hero(){
    return (
            <div className="flex flex-col sm:flex-row justify-around items-start h-[663px] bg-[#F2F0F1] max-w-screen-2xl mx-auto">
                  {/* left div */}
                  <div className="w-full sm:w-[500px] space-y-4 pl-2 sm:pl-0">
                    <h1 className="text-3xl sm:text-5xl font-bold mt-10">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Button>Shop Now</Button>
                  </div>
                  {/* right div */}
                  <div className="w-full sm:w-[500px] h-full bg-red-400 relative">
                    <Image src={"/profile.png"} className="h-full w-full"  width={100} height={100} alt="hero"></Image>
                    {/* star */}
                    <Image src={"/Vector.svg"} className="absolute top-0 right-5 sm:top-14 sm:right-20 w-[60px] sm:w-[80px]"   width={100} height={100} alt="hero"></Image>
                    <Image src={"/Vector.svg"}  className="absolute top-[100px] left-0 sm:top-[200px] sm:left-[-20px] w-[60px] sm:w-[80px]"  width={100} height={100} alt="hero"></Image>
                  </div>
            </div>
    )
  }
  export default Hero