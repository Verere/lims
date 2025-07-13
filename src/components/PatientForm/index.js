
"use client"
import { GlobalContext } from "@/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useFormState } from 'react-dom';
import { addPatient } from "@/actions";

 

const PatientForm = ({slug}) => {

const [category, setCategory]=useState("")
  const { replace } = useRouter();
  const pathname = usePathname();
  // const user= JSON.parse(localStorage.getItem('user'))
 const [state, formAction, isPending] = useFormState(addPatient, {});
let user;
// console.log(user)
  useEffect(()=>{
  const  getUser = ()=>{

    if(!user)replace("/login")
    }
    getUser()
  },[user, replace])
 useEffect(()=>{
  const getState=()=>{

if(state.error){
 toast.error(state.error)
}
if(state.success){
 toast.success(state.success)
}
}
getState()
 },[state])
   
  return (
    <>

      <form action={formAction} className="flex flex-col justify-between  w-full mt-0 mr-0 ml-0 ">
      <input type="text" placeholder="Enter Patient Name" name="name" className="border mx-2 mb-2 border-gray-400 p-2 w-full" required />
      <input type="text" placeholder="Enter Address" name="address" className="border mx-2 border-gray-400 p-2 w-full" />
    <div className="flex justify-between mt-2 w-full sm:flex-col">
      <input type="text" placeholder="Enter Patient Age" name="age" className="border mx-2 border-gray-400 p-2 w-full" required />
        <select name="gender"   value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Choose Group</option>
                <option  value="Male" >Male</option>
                <option  value="Female" >Female</option>
        </select> 
      <input type="text" placeholder="Enter Phone Number" name="number" className="border mx-2 border-gray-400 p-2 w-full" />
      <input type="text" placeholder="Enter enail" name="email" className="border mx-2 border-gray-400 p-2 w-full" />
     
     
        
       
       <input type="hidden"  name="labId" value={user?.labId} /> 
       <input type="hidden"  name="slug" value={slug} /> 
      <input type="hidden"  name="path" value={pathname} />
          
      <button  className="border border-gray-400 rounded-md bg-black text-white p-2 w-full">Add New Patient</button>
      </div>
    
      </form>
    </>
  );
};

export default PatientForm;

