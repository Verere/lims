import { addReferral} from '@/actions'
import { fetchReferralListByLab, fetchClinicListByLab } from '@/actions/fetch'
import Heading from '@/components/Heading'
import ReferralForm from '@/components/ReferralForm'
import ReferralTable from '@/components/ReferralTable'
import React from 'react'

const Referrals = async({params}) => {
    const patientList = await fetchReferralListByLab(params.slug) 
    const clinics = await fetchClinicListByLab(params.slug) 
  
  return (
    <>
    <Heading title="Referral Entry"/>
 
    <ReferralForm slug={params.slug} clinics={clinics}/>
    <ReferralTable patients={patientList.result}/>
    </>
  )
}

export default Referrals