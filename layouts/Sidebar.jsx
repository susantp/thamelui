import React, { useRef, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LinkIcon from "@mui/icons-material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRecoilState } from "recoil";
import { sidebarState } from "../store/atoms";
import Link from "next/link";

export default function Sidebar() {
  const [{ open }, setSidebar] = useRecoilState(sidebarState);
  const mainDivRef = useRef(null);
  const sidebarMenuList = [
    { name: "Dashboard", link: "/", icon: "/dashboard.png" },
    { name: "Products", link: "/products", icon: "/products.png" },
    { name: "Customers", link: "/customers", icon: "/customers.png" },
    {
      name: "Subscriptions",
      link: "/subscriptions",
      icon: "/subscriptions.png",
    },
    { name: "Invoices", link: "/invoices", icon: "/invoices.png" },
    { name: "Plans", link: "/plans", icon: "/customers.png" },
    { name: "Inventories", link: "/inventories", icon: "/payments.png" },
    { name: "Taxes", link: "/taxes", icon: "/reports.png" },
  ];

  /************************** conditional styles start ***********************/
  const customStyle = open
    ? "flex flex-col  w-60 fixed pt-32 bg-white border-gray-300 left-0 h-screen overflow-auto drop-shadow-xl z-40 dark:bg-black dark:text-white  transition-all  duration-300 ease-in-out"
    : "flex flex-col  w-24 fixed pt-32 bg-white border-gray-300	left-0 h-screen overflow-auto drop-shadow-xl  dark:bg-black dark:text-white transition-all  duration-300 ease-in-out";

  const fontDisplay = open ? "ml-3 text-[15px]" : "hidden";

  const toggleBtnWidth = open
    ? " flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-60 z-50"
    : " flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-24";

  /************************** conditional styles end ***********************/
  const linkDivStyle = open
    ? " flex flex-row items-center cursor-pointer hover:bg-blue-400 hover:text-white  w-full p-4"
    : "cursor-pointer hover:bg-blue-400 hover:block w-full p-6 ";

  const imageWidth = open ? "w-8" : "w-8";

  const SidebarMenuComponent = ({ sidebar }) => {
    return (
      <Link href={sidebar.link}>
        <div className={linkDivStyle}>
          <span>
            <img className={imageWidth} src={sidebar.icon} alt={sidebar.icon} />
          </span>
          <span className={fontDisplay}> {sidebar.name} </span>
        </div>
      </Link>
    );
  };

  // const handleClick = () => {
  //   setSidebar({ open: !open });
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div className={customStyle} ref={mainDivRef}>
        {sidebarMenuList.map((sidebar, key) => {
          return <SidebarMenuComponent key={key} sidebar={sidebar} />;
        })}
      </div>

      {/* {open ? (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowBackIcon />
        </div>
      ) : (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowForwardIcon />
        </div>
      )} */}
    </>
  );
}
