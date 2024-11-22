const { fetchLabId } = require("@/actions/fetch")

const LabSlug=async(params)=>{
    const slug = params.params.slug
    const getLab = await fetchLabId(slug)
    return(
        <>
        <h3>{getLab?.name}</h3>
        </>
    )
}
export default LabSlug