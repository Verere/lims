import { addCategory } from '@/actions'
import { fetchCategory , fetchGroupsByLab} from '@/actions/fetch'
import CategoryForm from '@/components/CategoryForm'
import CategoryTable from '@/components/CategoryTable'
import Heading from '@/components/Heading'
import React from 'react'

const CategoryPage = async({params}) => {
    const groups = await fetchGroupsByLab(params.slug) 
    const patientList = await fetchCategory(params.slug) 
  return (
    <>
    <Heading title="Category Entry"/>
    <CategoryForm addCat={addCategory} slug={params.slug} groups={groups}/>
    <CategoryTable categories={patientList}/>
    </>
  )
}

export default CategoryPage