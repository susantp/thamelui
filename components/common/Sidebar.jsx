import React, { useState, useRef, useLayoutEffect } from 'react'
import { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LinkIcon from '@mui/icons-material/Link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentsIcon from '@mui/icons-material/Payments';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Report';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Sidebar({doUpdateSideBarWidth}) {
  const [windowViewPort, setWindowViewPort] = useState()

  const sideBarRef = useRef(null)
  useEffect(() => {
    function listenResize() {
      setWindowViewPort(window.innerWidth)
    }
    window.addEventListener('resize', listenResize)
  }, [windowViewPort])
  
  useLayoutEffect(() => {
    doUpdateSideBarWidth(sideBarRef.current.offsetWidth)
    // console.log('sideBar width:',sideBarRef.current.offsetWidth)
  }, [windowViewPort])

  return (
    <>
      <div className='flex flex-col gap-5 w-60 fixed top-14 bg-gray-200 py-10	px-5	border-gray-300	 left-0 h-screen overflow-hidden' ref={sideBarRef}>
        <div>
          <span><DashboardIcon /></span>
          <span className='ml-3 text-sm' > Dashboard </span>
        </div>
        <div>
          <span><CategoryIcon /></span>
          <span className='ml-3 text-sm' > Products </span>
        </div>
        <div>
          <span><PersonOutlineIcon /></span>
          <span className='ml-3 text-sm' > Customers </span>
        </div>
        <div>
          <span><MonetizationOnIcon /></span>
          <span className='ml-3 text-sm' > Subscriptions </span>
        </div>
        <div>
          <span><ReceiptIcon /></span>
          <span className='ml-3 text-sm' > Invoice </span>
        </div>
        <div>
          <span><LinkIcon /></span>
          <span className='ml-3 text-sm' > Payment Links </span>
        </div>
      </div>
    </>
  )
}
