"use client"
import Sidebar from "@/components/sideBar/sidebar";
import TopBar from "@/components/topbar/topbar";
import { GlobalContext } from "@/context";
import { Transition } from "@headlessui/react";
import { usePathname,  } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Fragment } from "react";



export default function DashboardLayout({ children }) {
  const [showNav, setShowNav]= useState(false)
const [isMobile, setIsMobile] = useState(false)
const path= usePathname()
const slg = path.split('/')[2]
const {slug,setSlug} = useContext(GlobalContext)
function handleResize(){
  if(innerWidth <= 640){
    setShowNav(false)
    setIsMobile(true)
  }else{
    setIsMobile(false)
    setShowNav(true)
  }
}

useEffect(()=>{
  if(typeof window != undefined){
    addEventListener('resize', handleResize)
  }
  return()=>{
    removeEventListener('resize', handleResize)
  }
}, [])

  return (
      <>        
           
           <TopBar showNav={showNav} setShowNav={setShowNav}/>
            {/* <div className="flex h-screen overflow-hidden bg-slate-400"> */}
            <Transition
            as={Fragment}
            show={showNav}
            enter="transform transition duration-[400ms]"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform duration-[400ms] transition ease-in-out"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            >

              <Sidebar showNav={showNav} setShowNav={setShowNav} slug={slg} />
            </Transition>
          
             <div className={`transition-all  duration-[400ms] pt-16 ${showNav && !isMobile ? "pl-56": ''}`}>
              <div className="px-4 sm:px-1 mt-20 md:px-8">            
                        {children}
              </div>
            </div>
         
      </>
  );
}
