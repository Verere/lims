import { fetchExpensesListByLab } from '@/actions/fetch'
import Heading from '@/components/Heading'
import EodForm from '@/components/EodForm'

const Expenses = async({params}) => {
  const slug=params.slug
    const patientList = await fetchExpensesListByLab(slug) 
  return (
    <div className="-mt-[56px]">
    <Heading title="End of Day"/>
    <EodForm patientList={patientList} slug={slug}/>
    </div>
  )
}

export default Expenses