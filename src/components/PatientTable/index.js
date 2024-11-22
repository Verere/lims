
"use client"
import Link from "next/link";
import { Table } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context";
import {useEffect,  useContext, useState } from "react";

import Search from "../search/search";
import { useFormState } from 'react-dom';
import { addOrder } from "@/actions";
import { toast } from "react-toastify";

const PatientTable = ({patients}) => {
  const [slug, setSlug]=useState(null)
  const {user }= useContext(GlobalContext)
  const [state, formAction, isPending] = useFormState(addOrder, {});
     const { replace } = useRouter();
   const pat="patient"
   const pathname = usePathname();

useEffect(()=>{
  const getSlug=()=>{
  const slg = JSON.parse(localStorage.getItem('slug'))
setSlug(slg)
console.log(slug)
  }
  getSlug()
})
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

    return(
        <div className="w-full mt-3">
          
          <Search placeholder="Search Patient Name" p={pat}/>
        <Table.Root layout="auto" variant="surface">
    <Table.Header>
      
      <Table.Row>
        <Table.ColumnHeaderCell>Patient</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Reg No.</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Number</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Test</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  
    <Table.Body>
     {patients && patients?.map((patient) => (
              
      <Table.Row key={patient?._id}>
        <Table.RowHeaderCell> {patient?.name}</Table.RowHeaderCell>
        <Table.Cell>{patient?.regNumber}</Table.Cell>
        <Table.Cell>{patient?.age}</Table.Cell>
        <Table.Cell>{patient?.address}</Table.Cell>
        <Table.Cell>{patient?.number}</Table.Cell>
        <Table.Cell>{patient?.email}</Table.Cell>
       <Table.Cell>
                      <button  className="px-2 py-1 bg-blue-500 text-white font-bold rounded-lg">
                      Edit
                      </button>
                    </Table.Cell>
       <Table.Cell>
                     
                      <form action={formAction}>
                            <input type="hidden" name="slug" value={slug} />
                            <input type="hidden" name="patientId" value={patient?._id}/>
                            <input type="hidden" name="name" value={patient?.name}/>
                            <input type="hidden" name="phone" value={patient?.number}/>
                            <input type="hidden" name="address" value={patient?.address}/>
                            <input type="hidden" name="user" value={user} />
                            <input type="hidden" name="path" value={pathname} />   
   <button onClick={()=>replace(`/dashboard/${slug}/reg`)} className="px-2 py-1 bg-blue-700 text-white font-bold rounded-lg">
                      Reg
                      </button>
                          </form>
                    </Table.Cell>
       
      </Table.Row>
    ))} 
     
      
    </Table.Body>
  </Table.Root>
  </div>
    )
}
export default PatientTable