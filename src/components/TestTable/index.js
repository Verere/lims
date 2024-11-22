

"use client"
import Link from "next/link";
import { Table } from "@radix-ui/themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context";
import { useContext } from "react";

import Search from "../search/search";
import ProductButton from "../CommonListing/ProductButton";

const TestTable=({tests, orderRcpt, slug})=>{
 
    const { replace } = useRouter();
    const test ="test"
     console.log("s",slug)
return(


        <div className="w-full mt-3">
          
          <Search placeholder="Search Test Name" p={test}/>
        <Table.Root layout="auto" variant="surface">
    <Table.Header>
      
      <Table.Row>
        <Table.ColumnHeaderCell>Test</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Add</Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  
    <Table.Body>
     {tests && tests?.map((patient) => (
              
      <Table.Row key={patient?._id}>
        <Table.RowHeaderCell> {patient?.name}</Table.RowHeaderCell>
        <Table.Cell>{patient?.price}</Table.Cell>
        <Table.Cell>{patient?.category}</Table.Cell>
        <Table.Cell>{patient?.group}</Table.Cell>
       <Table.Cell>
                      <button  className="px-2 py-1 bg-blue-500 text-white font-bold rounded-lg">
                      Edit
                      </button>
                    </Table.Cell>
       <Table.Cell>
       <ProductButton  item={patient} orderRcpt={orderRcpt}/>
                    </Table.Cell>
       
      </Table.Row>
    ))} 
     
      
    </Table.Body>
  </Table.Root>
  </div>
    )
}
export default TestTable