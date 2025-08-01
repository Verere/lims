import { addPatient } from '@/actions'
import Heading from '@/components/Heading'
import PatientForm from '@/components/PatientForm'
import React from 'react'

const Patient = async({params}) => {
  const slug=params.slug
  return (
    <div className="-mt-[56px]">
    <Heading title="Patient Entry"/>
    <PatientForm addPatient={addPatient} slug={slug}/>
    </div>
  )
}

export default Patient