import React, { useEffect, useRef, useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LinkIcon from "@mui/icons-material/Link";
import { useRecoilState } from "recoil";
import { themeState } from "../../store/atoms";
import Link from "next/link";

export default function Sidebar({ doUpdateSideBarWidth }) {
  const [windowViewPort, setWindowViewPort] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useRecoilState(themeState);
  const sideBarRef = useRef(null);
  useEffect(() => {
    function listenResize() {
      setWindowViewPort(window.innerWidth);
      // setSidebarWidth(window.innerWidth)
      setSidebarWidth(sideBarRef.current.offsetWidth);
    }

    window.addEventListener("resize", listenResize);
    return () => {
      window.removeEventListener("resize", listenResize);
    };
  });
  return (
    <>
      <div
        className="flex flex-col gap-5 w-60 fixed top-16 bg-gray-200 py-10	px-5	border-gray-300	 left-0 h-screen overflow-hidden"
        ref={sideBarRef}
      >
        <Link href="/">
          <div className="cursor-pointer hover:bg-blue-400  ">
            <span>
              <DashboardIcon />
            </span>
            <span className="ml-3 text-sm"> Dashboard </span>
          </div>
        </Link>
        <Link href="/customers">
          <div className="cursor-pointer hover:bg-blue-400 hover:m-0">
            <span>
              <PersonOutlineIcon />
            </span>
            <span className="ml-3 text-sm"> Customers </span>
          </div>
        </Link>

        <Link>
          <div>
            <span>
              <CategoryIcon />
            </span>
            <span className="ml-3 text-sm"> Products </span>
          </div>
        </Link>
        <Link>
          <div>
            <span>
              <CategoryIcon />
            </span>
            <span className="ml-3 text-sm"> Plans </span>
          </div>
        </Link>

        <Link>
          <div>
            <span>
              <CategoryIcon />
            </span>
            <span className="ml-3 text-sm"> Payments </span>
          </div>
        </Link>

        <Link>
          <div>
            <span>
              <MonetizationOnIcon />
            </span>
            <span className="ml-3 text-sm"> Subscriptions </span>
          </div>
        </Link>
        <Link>
          <div>
            <span>
              <ReceiptIcon />
            </span>
            <span className="ml-3 text-sm"> Invoices </span>
          </div>
        </Link>
        <Link>
          <div>
            <span>
              <ReceiptIcon />
            </span>
            <span className="ml-3 text-sm"> Inventories </span>
          </div>
        </Link>
         <Link>
         <div>
          <span>
            <LinkIcon />
          </span>
          <span className="ml-3 text-sm"> Taxes </span>
        </div>
         </Link>
       
      </div>
    </>
  );
}
