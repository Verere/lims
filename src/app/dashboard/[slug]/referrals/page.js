import { fetchReferrals,fetchClinics, } from '@/actions/fetch'
import Heading from '@/components/Heading'
import ReferralForm from '@/components/ReferralForm'
import ReferralTable from '@/components/ReferralTable'
import React from 'react'

const Referrals = async({params}) => {
  const slug=params.slug
  // const up = updateClinicCancelled(slug)
    const patientList = await fetchReferrals(slug) 
    const clinics = await fetchClinics(slug) 
    console.log('p', clinics)
  return (
    <div className="-mt-[56px]">
    <Heading title="Referral Entry"/>
    <ReferralForm slug={slug} clinics={clinics}/>
    <ReferralTable patients={patientList.result} slug={slug}/>
    </div>
  )
}

export default Referrals