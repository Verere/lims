import { addPatient } from '@/actions'
import { fetchPatientListByLab } from '@/actions/fetch'
import Heading from '@/components/Heading'
import PatientForm from '@/components/PatientForm'
import PatientTable from '@/components/PatientTable'
import React from 'react'

const Patient = async({params}) => {
  const slug=params.slug
    const patientList = await fetchPatientListByLab(slug) 
  return (
    <>
    <Heading title="Patient Entry"/>
    <PatientForm addPatient={addPatient} slug={slug}/>
    <PatientTable patients={patientList.result} slug={slug}/>
    </>
  )
}

export default Patient