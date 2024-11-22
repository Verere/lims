"use client"

import React, { useEffect, useState, useContext } from 'react'

import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import Heading from '../Heading'
import PatientTable from '../PatientTable';
import TestTable from '../TestTable';
import { GlobalContext } from "@/context";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Cart } from '../CartItem/Cart';
import ReferralTable from '../ReferralTable';
import ClinicTable from '../ClinicTable';
import { CartContext } from '@/context/CartContext';
import { updateOrderBillTo } from '@/actions';
import PaymentPage from '../Payment';
import { CartTotal } from '../CartItem/CartTotal';


const RegPage=({slug, patients, tests, refLists, lab, orderRcpt, sales, clinicList,})=>{
  const {setOrder} = useContext(CartContext)
    const {user, } = useContext(GlobalContext)
const pathname = usePathname();
  const { replace } = useRouter();
    const [currentTab, setCurrentTab] = useState("patient");
useEffect(()=>{
  const setSlug=()=>{
    localStorage.setItem('slug', JSON.stringify(slug))

  }
  setSlug()
})  

useEffect(()=>{
  const getNewOrderToState=async()=>{
    await  setOrder(orderRcpt)
  }
  getNewOrderToState()
},[orderRcpt, setOrder])
	function handleTabChange(value) {
		setCurrentTab(value);
	  }
    return(
        <>
      <div className='min-h-screen -mt-[70px]'>
    <Heading title="Register Patient Test"/> 
   <div className='flex sm:flex-col w-full'>
       <div className='min-w-[50%] sm:w-full'>
  <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-center justify-between border-b pb-2">            
            <TabsList>
              <TabsTrigger value="patient">Patient</TabsTrigger>
              <TabsTrigger value="test">Test</TabsTrigger>
              <TabsTrigger value="clinic">Clinic</TabsTrigger>
              <TabsTrigger value="referral">Referral</TabsTrigger>
              <TabsTrigger value="bill">Bill To</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="patient">
          <>
		<PatientTable patients={patients}/>
   
</> 
     
      </TabsContent>
        <TabsContent value="test">
		<TestTable tests={tests} orderRcpt={orderRcpt}/>
        </TabsContent>
        <TabsContent value="clinic">
        <ClinicTable patients={clinicList} orderRcpt={orderRcpt}/>
        </TabsContent>
        <TabsContent value="referral">
        <ReferralTable patients={refLists} orderRcpt={orderRcpt}/>
        </TabsContent>
        <TabsContent value="bill">
		<div className='flex flex-col gap-2'>
      <button onClick={async()=>await updateOrderBillTo(orderRcpt[0]?._id, "Patient", pathname)}
      className='px-2 py-1 rounded-full bg-blue-800 text-white font-bold text-lg'>Patient</button>
      <button onClick={async()=>await updateOrderBillTo(orderRcpt[0]?._id, "Referral", pathname)}
      className='px-2 py-1 rounded-full bg-blue-800 text-white font-bold text-lg'>Referral</button>
      <button onClick={async()=>await updateOrderBillTo(orderRcpt[0]?._id, "Clinic", pathname)}
       className='px-2 py-1 rounded-full bg-blue-800 text-white font-bold text-lg'>Clinic</button>
    </div>
        </TabsContent>
        <TabsContent value="payment">
  <PaymentPage slug={slug} orderRcpt={orderRcpt} cart={sales} lab={lab} pathname={pathname}/>
         
        </TabsContent>
      </Tabs>
	  </div>
      <div className='flex flex-col w-full h-screen'>
     <div className='p-1 h-[50%]'>
      <h3 className='font-bold text-lg text-center'>Registration Details</h3>
      <div className="flex flex-col font-bold space-y-2">
        <p>Patient Full Name : <span>{orderRcpt[0]?.name}</span> </p>
        <p>Phone Number :<span>{orderRcpt[0]?.phone}</span></p>
        <p>Address : <span>{orderRcpt[0]?.address}</span></p>
        <p>Clinic : <span>{orderRcpt[0]?.clinic}</span></p>
        <p>Referral : <span>{orderRcpt[0]?.referral}</span></p>
        <p>Bill To :<span>{orderRcpt[0]?.billTo}</span></p>
      
      </div>
      <div className='flex'>
    <CartTotal cart={sales}/>
      </div>
      <div className='flex'>
      <button  className="p-2 w-full mt-2 bg-black text-white font-bold rounded-bg">
              Print Test
                </button>
                <button  className="p-2 w-full mt-2 bg-red-500 text-white font-bold rounded-bg">
            Cancel Test
                </button>
      </div>
      </div>
     <div className='p-1 h-[50%] bg-blue-200'>
      <Cart cart={sales}/>
     </div>
   </div>

	  </div>
	  </div>
    </>
    )
}
export default RegPage