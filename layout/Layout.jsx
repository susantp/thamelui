import React, { useState } from 'react'
import Content from '../components/common/Content'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'

export default function Layout({ children }) {
  const [sideBarWidth, setSideBarWidth] = useState()
  const getViewPort = () => {
    console.log('port')
  }
  const handleSideBarWidth = (width) => {
    setSideBarWidth(width)
  }
 const getSidebarWidth = () => {
   return sideBarWidth
 }
  return (
    <>
      <Navbar></Navbar>
      <Sidebar doUpdateSideBarWidth={handleSideBarWidth}></Sidebar>
      <Content>
        {children}
      </Content>
      <Footer></Footer>
    </>
  )
}
