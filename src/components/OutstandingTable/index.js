
"use client"
import Link from "next/link";
import { Table } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context";
import { useContext, useState, useEffect } from "react";

import Search from "../search/search";
import { updateOrderRef } from "@/actions";
import { fetchReferralListByLab } from "@/actions/fetch";

const OutstandingTable = ({patients, orderRcpt}) => {


const { replace } = useRouter();
const pathname = usePathname();
  const initialTests = [...patients]
 
    const [item, setItem] = useState([...initialTests])
    const [code, setCode]= useState('')

    useEffect(()=>{
      if(code!=='')setItem(initialTests)
    },[code])

      const handleSearch = async(code) => {       
        
        if (code && code.length) {
          const items = await fetchReferralListByLab(slug, code)
          setItem(items)
          setCode("")
        } else{
          setItem(initialTests)
          setCode("")
        }
        
      }

 const handleUpdate= async(id, name, ordId, path)=>{

    await updateOrderRef(id, name, ordId, path)
}
    return(
        <div className="w-full mt-3">
            <div className="flex justify-between items-center border border-gray-400 w-2/3 mb-2 mx-auto  pl-2 rounded-lg ">
                   <input type="text" placeholder="Search Bills" 
                   onChange={(e)=>setCode(e.target.value)} 
                   name="code" className="p-2 outline-none focus:border-none "/>  
                   <button className="flex justify-between items-center bg-gray-400 p-2  rounded-r-lg"
                   onClick={()=>handleSearch(code)}> 
                    Search</button>  
                 </div>
        <Table.Root layout="auto" variant="surface">
    <Table.Header>
      
      <Table.Row>
        <Table.ColumnHeaderCell>Order No.</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Patient</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Billed To</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Test</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Amount Paid</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Balance</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Make Payment</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Test</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  
    <Table.Body>
     {item && item?.map((patient) => (
              
      <Table.Row key={patient?._id}>
        <Table.RowHeaderCell> {patient?.name}</Table.RowHeaderCell>
        <Table.Cell>{patient?.regNumber}</Table.Cell>
        <Table.Cell>{patient?.address}</Table.Cell>
        <Table.Cell>{patient?.number}</Table.Cell>
        <Table.Cell>{patient?.email}</Table.Cell>
        <Table.Cell>{patient?.clinic}</Table.Cell>
       <Table.Cell>
                      <button  className="px-2 py-1 bg-blue-500 text-white font-bold rounded-lg">
                      Edit
                      </button>
                    </Table.Cell>
       <Table.Cell>
       <button onClick={()=>handleUpdate(patient?._id, patient?.name, orderRcpt[0]?._id, pathname)} className="px-2 py-1 bg-blue-500 text-white font-bold rounded-lg">
       Add
                      </button>
                    </Table.Cell>
       
      </Table.Row>
    ))} 
     
      
    </Table.Body>
  </Table.Root>
  </div>
    )
}
export default OutstandingTable