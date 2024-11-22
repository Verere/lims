
import { fetchPatientListByLab ,fetchTestsByLab,fetchSalesByOrderId, fetchLabSlug, fetchOneOrder, fetchReferralListByLab, fetchClinicListByLab} from '@/actions/fetch'
import RegPage from '@/components/RegPage'

const RegisterTest = async({params, searchParams}) => {
  const slug= params?.slug
  const ref = searchParams.ref || ""
  const patient = searchParams.patient || ""
  const clinic = searchParams.clinic || ""
  const test = searchParams.test|| ""
  const patientList = await fetchPatientListByLab(slug, patient) 
  const testLists = await fetchTestsByLab(slug, test) 
  const clinicList = await fetchClinicListByLab(slug, clinic) 
  const refList = await fetchReferralListByLab(slug, ref) 
  const orderRcpt=  await fetchOneOrder(slug)
  const sales=  await fetchSalesByOrderId(orderRcpt[0]?._id)
  const lab= await fetchLabSlug(slug)
  return (
    <>
	<RegPage slug={slug} lab={lab} sales={sales} patients={patientList.result} tests={testLists} refLists={refList.result} clinicList={clinicList} orderRcpt={orderRcpt}/>
	
</>
  )
}

export default RegisterTest