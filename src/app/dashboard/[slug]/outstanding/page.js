import { addPatient } from '@/actions'
import { fetchPatientListByLab } from '@/actions/fetch'
import Heading from '@/components/Heading'
import OutstandingTable from '@/components/OutstandingTable'
import React from 'react'

const Outstanding = async({params}) => {
  const slug=params.slug
    const patientList = await fetchPatientListByLab(slug) 
  return (
    <div className="-mt-[56px]">
    <Heading title="Outstanding Bills"/>
    <OutstandingTable patients={patientList.result} slug={slug}/>
    </div>
  )
}

export default Outstanding