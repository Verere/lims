import { fetchLabSlug } from '@/actions/fetch'

const LabSlug=async(params)=>{
    const slug = params.params.slug
    const getLab = await fetchLabSlug(slug)
    return(
        <>
        <h3>{getLab?.name}</h3>
        </>
    )
}
export default LabSlug