"use client";

import { authenticate } from "@/actions";
import { fetchUser } from "@/actions/fetch";
import { GlobalContext } from "@/context";
import { useContext, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";



const LoginForm = () => {
   const [state, formAction, Pending] = useFormState(authenticate, {});
const [loading, setLoading]= useState(false)
    const {location,user, setUser} = useContext(GlobalContext)
const [email, setEmail]= useState("")

  useEffect(()=>{
const getState=async()=>{
  if(state.error){
   await toast.error(state.error)
   setLoading(false)
  }
}
getState()
  },[state])

const getUser = async()=>{
  setLoading(true)
  const userN = await fetchUser(email );
  setUser(userN)
  console.log('u', user)
    // localStorage.setItem('user', JSON.stringify(userN))
}

  return (
    <div >        

    <div className=" w-full flex max-w-3xl  bg-gray-100 rounded-2xl shadow-lg p-4 ">
      <div className=" bg-gray-200 flex flex-col px-3 py-4 sm:max-w-[480px] shadow sm:rounded-lg sm:px-12">
        <h2 className="font-bold text-2xl">login</h2>
        <p className="text-sm mt-3">if you are already a member please login</p>
        <form className="space-y-6 mt-5" action={formAction}>
      <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                  <input
                    placeholder="email" 
                    name="email"
                    value={email}
                    onChange={async (e) => {
                      await setEmail(e.target.value)
                    }}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                  <input
                    placeholder="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
      <div>
                    <button
                      className="flex w-full mb-5 border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      aria-disabled={Pending}
                      onClick={()=>getUser()}>
                       { loading ? "Loading... ": "  Sign in"}
                    
                    </button>
                  </div>
            
    </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;



 
  
     
      
       
 