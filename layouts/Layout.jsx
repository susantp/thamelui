import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Content>

        {children}
      </Content>
      <Footer></Footer>
    </>
  );
}
