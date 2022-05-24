import React, { useState } from 'react'
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
export default function Sidebar() {

  const [active, setActive] = useState('sidebar')
 
  const handleClick = (data) => {
    if(data.includes('active')){
      setActive('sidebar')
    }else{
      setActive('sidebar active')
    }
     
  } 


  return (
    <>
    <div  className={active}>
      {/* <div className="logo_content">
        <div className="logo">
            <div className="logo_name">
              CodingLab
            </div>
        </div>
        <MenuIcon  className="menu-button"  />
      </div> */}
      <ul className='nav_list' >
          <li>
            <a href="#">
              <DashboardIcon  className='side-icon'  />
              <span className='links_name'>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CategoryIcon className='side-icon' />
              <span className='links_name'>Products</span>
            </a>
          </li>
          <li>
            <a href="#">
            <PersonOutlineIcon className='side-icon' />
              <span className='links_name'>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <MonetizationOnIcon className='side-icon' />
              <span className='links_name'>Subscriptions</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ReceiptIcon  className='side-icon'/>
              <span className='links_name'>Invoices</span>
            </a>
          </li>
          <li>
            <a href="#">
              <LinkIcon className='side-icon' />
              <span className='links_name'>Payment Links</span>
            </a>
          </li>
          <li>
            <a href="#">
              <AttachMoneyIcon  className='side-icon' />
              <span className='links_name'>Credit Notes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <PaymentsIcon className='side-icon' />
              <span className='links_name'>Payment</span>
            </a>
          </li>
          <li>
            <a href="#">
              <EventIcon className='side-icon' />
              <span className='links_name'>Events</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ReportIcon className='side-icon' />
              <span className='links_name'>Reports</span>
            </a>
          </li>
      </ul>
  
      <div onClick={()=>handleClick(active)} className='menuBottom' >
              <div className="arrowIcon">
              <ArrowBackIcon  />
              </div>
                
      </div>

    </div>
    </>
  )
}
