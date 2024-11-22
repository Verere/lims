"use client"
import { FaEdit } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Banner =()=>{
    return(
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-1">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div>
                        <picture>
                            <img src="/rice.jpg" alt="food" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-sm object-cover"/>
                        </picture>
                    </div>
                    <div className="">
                        <h2 className="text-3xl sm:text-4xl font-bold">Display your restaurant Menu</h2>
                        <p className="text-sm text-gray-600 tracking-wide leading-5 mb-1"> 
 now you can let your customer see a picture of what they get to buy before making order...
                        </p>
                        <div className="flex gap-3 items-center mb-1">
                            <FaEdit className="h-12 w-12 rounded-full shadow-sm p-4 text-4xl bg-violet-200"/>
                            <p>Edit Prices of your Menu with Ease</p>
                        </div>
                        <div className="flex gap-3 items-center mb-1">
                            <GiCash className="h-12 w-12 rounded-full shadow-sm p-4 text-4xl bg-violet-200"/>
                            <p>Save Money from recurrent printing of paper menu</p>
                        </div>
                        <div className="flex gap-3 items-center mb-1">
                            <RiCustomerService2Fill className="h-12 w-12 rounded-full shadow-sm p-4 text-4xl bg-violet-200"/>
                            <p>Add more items or remove from your menu in real time at your finger tip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Banner;