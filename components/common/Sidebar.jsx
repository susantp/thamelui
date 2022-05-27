import React, { useEffect, useRef, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import CategoryIcon from '@mui/icons-material/Category'
import ReceiptIcon from '@mui/icons-material/Receipt'
import LinkIcon from '@mui/icons-material/Link'
import { useRecoilState } from 'recoil'
import { themeState } from '../../store/atoms'

export default function Sidebar ({ doUpdateSideBarWidth }) {
  const [windowViewPort, setWindowViewPort] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useRecoilState(themeState)
  const sideBarRef = useRef(null)
  useEffect(() => {
    function listenResize () {
      setWindowViewPort(window.innerWidth)
      setSidebarWidth(window.innerWidth)
      // setSidebarWidth(sideBarRef.current.offsetWidth)
    }

    window.addEventListener('resize', listenResize)
    return () => {
      window.removeEventListener('resize', listenResize)
    }
  })
  return (
    <>
      <div
        className="flex flex-col gap-5 w-60 fixed top-14 bg-gray-200 py-10	px-5	border-gray-300	 left-0 h-screen overflow-hidden"
        ref={sideBarRef}>
        <div>
          <span><DashboardIcon/></span>
          <span className="ml-3 text-sm"> Dashboard </span>
        </div>
        <div>
          <span><CategoryIcon/></span>
          <span className="ml-3 text-sm"> Products </span>
        </div>
        <div>
          <span><PersonOutlineIcon/></span>
          <span className="ml-3 text-sm"> Customers </span>
        </div>
        <div>
          <span><MonetizationOnIcon/></span>
          <span className="ml-3 text-sm"> Subscriptions </span>
        </div>
        <div>
          <span><ReceiptIcon/></span>
          <span className="ml-3 text-sm"> Invoice </span>
        </div>
        <div>
          <span><LinkIcon/></span>
          <span className="ml-3 text-sm"> Payment Links </span>
        </div>
      </div>
    </>
  )
}
