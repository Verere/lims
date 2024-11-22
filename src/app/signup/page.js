"use client";
import { registerNewUser, addUser} from "@/actions";
import Footer from "@/components/Footer";
import MainNav from "@/components/mainNav";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from 'react-dom';
import { toast } from "react-toastify";



export default function Register() {
 
  const [state, formAction] = useFormState(addUser, {});


  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('You can now log in!');
    }
  }, [state]);


  // async function handleRegSubmit(formData){  
  //  const data = await addUser(formData)
  //  return data
  // }

  return (
    <>
    <MainNav/>
    <form action={formAction}  className="bg-white relative min-h-screen pt-[100px]">
    <div className="flex flex-col items-center justify-between w-full pt-0 pr-10 pb-0 pl-10 sm:pl-1 sm:pr-1 mx-auto  xl:px-5 lg:flex-row">
      <div className="flex flex-col justify-center items-center w-full pr-0 pl-0 lg:flex-row">
        <div className="w-full mt-10 mr-0 mb-0 ml-0 relative min-w-2xl max-w-2xl lg:mt-0 lg:w-5/12 md:w-full">
          <div className="flex flex-col items-center justify-start pt-10 pr-2 pb-10 pl-2 bg-white shadow-2xl rounded-xl relative z-10">
            <p className="w-full text-4xl font-medium text-center text-yellow-800 font-serif">
                  Sign up for an account
              </p>
            
              
                <div className="w-full  p-2 flex flex-col">
                <input type="text" placeholder="Enter you Name" name="name" className="w-full  border  mb-4 p-2 "/>
                <input type="email" placeholder="Email" name="email" className="w-full  border  mb-4 p-2 "/>

                <input type="password" placeholder="password" name="password" className="w-full border mr-4 mb-0 p-2"/>
                <input type="password" placeholder="confirm password" name="cfpassword" className="w-full border mr-4 mt-4 mb-0 p-2"/>
                
                </div>
           
              <p className="mt-4 text-center">By signing up you accept our <Link href="#" className="text-blue-600 hover:border-b">terms and conditions <span className="text-black">&</span> privacy policy</Link></p>
              <button
                className=" inline-flex mt-2 w-full items-center justify-center
                 bg-black px-6 py-4 text-lg text-yellow-500 transition-all duration-200 ease-in-out 
                 focus:shadow font-medium uppercase tracking-wide"
type="submit"
                // onClick={handleRegSubmit}
              >
              
               Register
                
              </button>
              <p className="mt-4">Already have an Account?</p>
            <Link href="/login" className="opacity-70  inline-flex mt-2 w-full items-center justify-center bg-black px-6 py-4 
              text-lg text-yellow-300 transition-all duration-200 ease-in-out focus:shadow font-medium
               uppercase tracking-wide"
              
               >
               Login </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Footer/>
    </>
  );
}
