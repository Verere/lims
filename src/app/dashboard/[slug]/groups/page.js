import { addGroup } from '@/actions'
import { fetchGroupsByLab } from '@/actions/fetch'
import GroupForm from '@/components/GroupForm'
import GroupTable from '@/components/GroupTable'
import Heading from '@/components/Heading'
import React from 'react'

const GroupPage = async({params}) => {
    const patientList = await fetchGroupsByLab(params.slug) 
  return (
    <>
    <Heading title="Group Entry"/>
    <GroupForm addPatient={addGroup} slug={params.slug}/>
    <GroupTable groups={patientList}/>
    </>
  )
}

export default GroupPage