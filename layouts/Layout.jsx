import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar></Sidebar>

      <Content>
        <Navbar></Navbar>
        {children}
      </Content>
    </>
  );
}
