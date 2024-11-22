import { fetchAllLab } from '@/actions/fetch'
import { LabComponent } from '@/components/Lab/Lab'
import React from 'react'

const Lab = async() => {
  const labs = await fetchAllLab()
  return (
    <LabComponent labs={labs}/>
  )
}

export default Lab