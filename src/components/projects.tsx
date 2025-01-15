import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Projects(){
    return(
        <div className="mt-20 mb-10 max-w-screen-2xl mx-auto">
             <h1 className="text-center font-bold  text-2xl sm:text-3xl">NEW ARRIVALS</h1>
             {/* conatiner */}
             <div className="flex justify-center sm:justify-between items-center p-3 mt-10 space-x-2">
                 <div> 
                    <Image src={"/product1.svg"} className="rounded-[20px] w-[200px] h-[200px]  sm:w-[290px] sm:h-[290px]" width={100} height={100} alt="shirt"></Image>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className="flex text-yellow-300">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <p className="font-bold">$120</p>
                 </div>
                 <div> 
                    <Image src={"/product1.svg"}  className="rounded-[20px] w-[200px] h-[200px]  sm:w-[290px] sm:h-[290px]"  width={100} height={100} alt="shirt"></Image>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className="flex text-yellow-300">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <p className="font-bold">$120</p>
                    
                 </div>
                 <div className="hidden sm:block"> 
                    <Image src={"/product1.svg"}  className="rounded-[20px] w-[200px] h-[200px]  sm:w-[290px] sm:h-[290px]"  width={100} height={100} alt="shirt"></Image>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className="flex text-yellow-300">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <p className="font-bold">$120</p>
                 </div>
                 <div className="hidden sm:block"> 
                    <Image src={"/product1.svg"}  className=" rounded-[20px] w-[200px] h-[200px]  sm:w-[290px] sm:h-[290px]"  width={100} height={100} alt="shirt"></Image>
                    <p>T-SHIRT WITH TAPE DETAILS</p>
                    <div className="flex text-yellow-300">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <p className="font-bold">$120</p>
                 </div>
             </div>
        </div>
    )
}