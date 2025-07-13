import { fetchTestsByLab, fetchGroupsByLab , fetchOneOrder, fetchCategory} from '@/actions/fetch'
import Heading from '@/components/Heading'
import TestForm from '@/components/TestForm'
import TestTable from '@/components/TestTable'
import React from 'react'

const TestPage = async({params}) => {
    const patientList = await fetchTestsByLab(params.slug) 
    const categories = await fetchCategory(params.slug) 
    // const groups = await fetchGroupsByLab(params.slug) 
    const orderRcpt=  await fetchOneOrder(params.slug)


  return (
    <div className="-mt-[56px]">
    <Heading title="Test Entry"/>
    <TestForm slug={params.slug} categories={categories} order={orderRcpt}/>
      <TestTable tests={patientList} orderRcpt={orderRcpt} slug={params.slug} />
    </div>
  )
}

export default TestPage