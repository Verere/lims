import { fetchTestsByLab, fetchGroupsByLab , fetchOneOrder} from '@/actions/fetch'
import Heading from '@/components/Heading'
import TestForm from '@/components/TestForm'
import TestTable from '@/components/TestTable'
import React from 'react'

const TestPage = async({params}) => {
    const patientList = await fetchTestsByLab(params.slug) 
    const groups = await fetchGroupsByLab(params.slug) 
    const orderRcpt=  await fetchOneOrder(params.slug)

  return (
    <>
    <Heading title="Test Entry"/>
    <TestForm slug={params.slug} groups={groups} order={orderRcpt}/>
      <TestTable tests={patientList} orderRcpt={orderRcpt} slug={params.slug} />
    </>
  )
}

export default TestPage