import { fetchClinicListByLab} from '@/actions/fetch'
import ClinicForm from '@/components/ClinicForm'
import ClinicTable from '@/components/ClinicTable'
import Heading from '@/components/Heading'
import React from 'react'
import { updateOrderClinic } from "@/actions/update";


const ClinicPage = async({params}) => {
    const patientList = await fetchClinicListByLab(params.slug) 
  return (
    <>
    <Heading title="Clinic Entry"/>
    <ClinicForm  slug={params.slug} />
    <ClinicTable patients={patientList}/>
    </>
  )
}

export default ClinicPage