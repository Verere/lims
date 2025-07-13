import { addReferral} from '@/actions'
import { fetchAllReferralOrders } from '@/actions/fetch'
import Heading from '@/components/Heading'
import RefList from '@/components/RefList'
import React from 'react'

const Referrals = async({params}) => {
    const patientList = await fetchAllReferralOrders(params.slug) 
    console.log('ref', patientList)
  
  return (
  <div className="-mt-[56px]">
    <Heading title="Referral Report"/>
 
    <RefList patients={patientList} slug={params.slug}/>
    </div>
  )
}

export default Referrals