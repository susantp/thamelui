import React from 'react'
import Link from 'next/link'
import GroupAddIcon from '@mui/icons-material/GroupAddOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import HelpIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
export default function Navbar() {
  return (
    <>
      <nav className=' flex flex-row justify-between flex-wrap gap-y-3  p-4 w-full h-14 bg-neutral-200 fixed top-0' >
        <div className="basis-1/3 flex flex-row justify-evenly flex-wrap  gap-y-3">
          
          <div ><p>Logo</p></div>
          <div > <p>searchbar</p> </div>
          <div  > <p>searchbar</p> </div>
          <div  > <p>searchbar</p> </div>

        </div>


        <div className='flex flex-row justify-around basis-1/3  ' >
          <p className='text-1xl font-normal ' >This is test organization</p>
          <p className='text-1xl font-normal ' >New IT Venture</p>
          <div>
            <GroupAddIcon />
          </div>
          <div>
            <NotificationsIcon />
          </div>
          <div>
            <SettingsIcon />
          </div>
          <div>
            <HelpIcon />
          </div>
          <div>
            <AccountCircleIcon />
          </div>
        </div>
      </nav>
    </>
  )
}
