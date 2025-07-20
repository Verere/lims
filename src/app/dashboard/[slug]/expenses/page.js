import { addPatient } from '@/actions'
import { fetchExpensesListByLab } from '@/actions/fetch'
import Heading from '@/components/Heading'
import ExpensesForm from '@/components/ExpensesForm'
import ExpensesTable from '@/components/ExpensesTable'
import React from 'react'

const Expenses = async({params}) => {
  const slug=params.slug
    const patientList = await fetchExpensesListByLab(slug) 
    console.log('e', patientList)
  return (
    <div className="-mt-[56px]">
    <Heading title="Enter Expenses"/>
    <ExpensesForm addPatient={addPatient} slug={slug}/>
    <ExpensesTable patients={patientList} slug={slug}/>
    </div>
  )
}

export default Expenses