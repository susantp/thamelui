import React from 'react'
import Content from '../common/Content'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Sidebar from '../common/Sidebar'

export default function Layout({children}) {
  return (
      <>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Content>
      {children}
    </Content>
    <Footer></Footer>
     </>
  )
}
