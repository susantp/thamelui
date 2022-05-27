import React from 'react'
import Content from '../components/common/Content'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'

export default function Layout({ children }) {
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
