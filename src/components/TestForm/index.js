
"use client"
import { GlobalContext } from "@/context";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useFormState } from 'react-dom';
import { addTest } from '@/actions'
import { fetchCategoryByGrp } from "@/actions/fetch";

 

const TestForm = ({slug, groups, order}) => {


  const { replace } = useRouter();
  const pathname = usePathname();
  const user= JSON.parse(localStorage.getItem('user'))
  const [state, formAction, isPending] = useFormState(addTest, {});

const [values, setValues]=useState([])
const [categories, setCategories]=useState([])
const [category, setCategory]=useState([])
  
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

 async function findCategory(e){  
    await  setValues(e);
     const cat = await fetchCategoryByGrp(slug, e)
     await  setCategories(cat)
   }
    
  return (
    <>

      <form action={formAction} className="flex flex-col justify-between  w-full mt-0 mr-0 ml-0 ">
      <input type="text" placeholder="Enter Test Name" name="name" className="border mx-2 mb-2 border-gray-400 p-2 w-full" required />
      <input type="number" placeholder="Enter Price" name="price" className="border mx-2 border-gray-400 p-2 w-full" />
    <div className="flex justify-around mt-2 w-full">
    <select name="group"   value={values} onChange={(e)=>findCategory(e.target.value)}>
          <option value="">Choose Group</option>
            {
              groups?.map(menu=>(
                <option key={menu._id} id={menu.name} value={menu.name} >{menu.name}</option>
              ))
            }
        </select>
        <select name="category" id="cat"  value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Choose Category</option>
            {
              categories?.map(menu=>(
                <option key={menu._id} id={menu.name} value={menu.name} >{menu.name}</option>
              ))
            }
        </select>  </div>
      <div className="flex justify-between w-full mt-2">            
       <input type="hidden"  name="order" value={order?._id} /> 
       <input type="hidden"  name="user" value={user?.name} /> 
       <input type="hidden"  name="slug" value={slug} /> 
      <input type="hidden"  name="path" value={pathname} />
          
      <button  className="border border-gray-400 rounded-md bg-black text-white p-2 ">Add Test</button>
      </div>
    
      </form>
    </>
  );
};

export default TestForm;

