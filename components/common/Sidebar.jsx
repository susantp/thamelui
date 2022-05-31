import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LinkIcon from "@mui/icons-material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRecoilState } from "recoil";
import { themeState } from "../../store/atoms";
import Link from "next/link";

export default function Sidebar({ doUpdateSideBarWidth }) {
  const [isOpen, setisOpen] = useState(true);

  const handleClick = () => {
    setisOpen(!isOpen);
  };
  const customStyle = isOpen
    ? "flex flex-col  w-60 fixed top-16 bg-gray-200  border-gray-300 left-0 h-screen"
    : "flex flex-col  w-[78px] fixed top-16 bg-gray-200 	border-gray-300	 left-0 h-screen transition ease-in-out delay-150 ";

  const fontDisplay = isOpen ? "ml-3 text-xs" : "hidden";

  const toggleBtnWidth = isOpen
    ? " flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-60"
    : " flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-[78px]";

    const linkDivStyle = "cursor-pointer hover:bg-blue-400 hover:block w-full p-4 "
  return (
    <>
      <div className={customStyle}>
        <Link href="/">
          <div className={linkDivStyle}>
            <span>
              <DashboardIcon />
            </span>
            <span className={fontDisplay}> Dashboard </span>
          </div>
        </Link>
        <Link href="/customers">
          <div className={linkDivStyle}>
            <span>
              <PersonOutlineIcon />
            </span>
            <span className={fontDisplay}> Customers </span>
          </div>
        </Link>

        <Link href="/products">
          <div className={linkDivStyle}>
            <span>
              <CategoryIcon />
            </span>
            <span className={fontDisplay}> Products </span>
          </div>
        </Link>
        <Link href="/plans">
          <div className={linkDivStyle}>
            <span>
              <CategoryIcon />
            </span>
            <span className={fontDisplay}> Plans </span>
          </div>
        </Link>

        <Link href="/payments">
          <div className={linkDivStyle}>
            <span>
              <CategoryIcon />
            </span>
            <span className={fontDisplay}> Payments </span>
          </div>
        </Link>

        <Link href="/subscriptions">
          <div className={linkDivStyle}>
            <span>
              <MonetizationOnIcon />
            </span>
            <span className={fontDisplay}> Subscriptions </span>
          </div>
        </Link>
        <Link href="/invoices">
          <div className={linkDivStyle}>
            <span>
              <ReceiptIcon />
            </span>
            <span className={fontDisplay}> Invoices </span>
          </div>
        </Link>
        <Link href="/inventories">
          <div className={linkDivStyle}>
            <span>
              <ReceiptIcon />
            </span>
            <span className={fontDisplay}> Inventories </span>
          </div>
        </Link>
        <Link href="/taxes">
          <div className={linkDivStyle}>
            <span>
              <LinkIcon />
            </span>
            <span className={fontDisplay}> Taxes </span>
          </div>
        </Link>
      </div>

      {isOpen ? (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowBackIcon />
        </div>
      ) : (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowForwardIcon />
        </div>
      )}
    </>
  );
}
