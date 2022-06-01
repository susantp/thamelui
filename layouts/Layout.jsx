import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

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
