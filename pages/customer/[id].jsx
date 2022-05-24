import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../layout/Layout'
export default function Customer() {
    const router = useRouter()
    const {id} = router.query
  return (
      <Layout>
          {/* <h1>Customer id is {id}</h1> */}
      </Layout>
    
  )
}
