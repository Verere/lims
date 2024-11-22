import { auth }  from "@/auth";
import React from 'react'
import {redirect} from 'next/navigation'
import DashboardPage from "@/components/Dashboard";

const DashBoard=async() => {



    // const cUser = await currentUser(user?.user.email)
  // if(!user) redirect("/login")
  return (
    <div className="min-h-screen">
      <DashboardPage/>
      </div>
  )
}
export default DashBoard