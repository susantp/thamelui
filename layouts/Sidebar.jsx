import React, { useRef, useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import CategoryIcon from '@mui/icons-material/Category'
import ReceiptIcon from '@mui/icons-material/Receipt'
import LinkIcon from '@mui/icons-material/Link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../store/atoms'
import Link from 'next/link'

export default function Sidebar () {
  const [isOpen, setIsOpen] = useState(true)
  const [{ open }, setSidebar] = useRecoilState(sidebarState)

  const mainDivRef = useRef(null)
  const sidebarMenuList = [
    { name: 'Dashboard', link: '/', icon: <DashboardIcon/> },
    { name: 'Products', link: '/products', icon: <CategoryIcon/> },
    { name: 'Customers', link: '/customers', icon: <PersonOutlineIcon/> },
    { name: 'Subscriptions', link: '/subscriptions', icon: <MonetizationOnIcon/> },
    { name: 'Invoices', link: '/invoices', icon: <ReceiptIcon/> },
    { name: 'Plans', link: '/plans', icon: <ReceiptIcon/> },
    { name: 'Inventories', link: '/inventories', icon: <ReceiptIcon/> },
    { name: 'Taxes', link: '/taxes', icon: <LinkIcon/> }
  ]

  /************************** conditional styles start ***********************/
  const customStyle = isOpen
    ? 'flex flex-col  w-60 fixed top-16 bg-gray-200  border-gray-300 left-0 h-screen overflow-auto'
    : 'flex flex-col  w-[78px] fixed top-16 bg-gray-200 	border-gray-300	 left-0 h-screen transition ease-in-out delay-150 overflow-auto'

  const fontDisplay = isOpen ? 'ml-3 text-xs' : 'hidden'

  const toggleBtnWidth = isOpen
    ? ' flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-60'
    : ' flex justify-center pt-2 text-white border cursor-pointer  border-slate-700 fixed bottom-0 h-9 bg-slate-400 w-[78px]'

  /************************** conditional styles end ***********************/
  const linkDivStyle = 'cursor-pointer hover:bg-blue-400 hover:block w-full p-4 '

  const SidebarMenuComponent = ({ sidebar }) => {
    return (
      <Link href={sidebar.link}>
        <div className={linkDivStyle}>
            <span>
              {sidebar.icon}
            </span>
          <span className={fontDisplay}> {sidebar.name} </span>
        </div>
      </Link>
    )
  }

  const handleClick = () => {
    setSidebar({open:!isOpen})
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div className={customStyle} ref={mainDivRef}>
        {
          sidebarMenuList.map((sidebar, key) => {
            return <SidebarMenuComponent key={key} sidebar={sidebar}/>
          })
        }
      </div>

      {isOpen ? (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowBackIcon/>
        </div>
      ) : (
        <div onClick={handleClick} className={toggleBtnWidth}>
          <ArrowForwardIcon/>
        </div>
      )}
    </>
  )
}
