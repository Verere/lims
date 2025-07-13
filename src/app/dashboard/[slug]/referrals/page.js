import { fetchReferrals } from '@/actions/fetch'
import Heading from '@/components/Heading'
import ReferralForm from '@/components/ReferralForm'
import ReferralTable from '@/components/ReferralTable'
import React from 'react'

const Referrals = async({params}) => {
  const slug=params.slug
    const patientList = await fetchReferrals(slug) 
    console.log('p', patientList)
  return (
    <div className="-mt-[56px]">
    <Heading title="Referral Entry"/>
    <ReferralForm slug={slug}/>
    <ReferralTable patients={patientList.result} slug={slug}/>
    </div>
  )
}

export default Referrals