import React, { useState } from 'react'
import Link from 'next/link'
import GroupAddIcon from '@mui/icons-material/GroupAddOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import HelpIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const [display, setDisplay] = useState(false)
  const onDisplay = () => {
    setDisplay(!display)
  }
  const hideDisplay = () => {
    setDisplay(false)
  }
  return (
    <>
      <nav className=' flex flex-row justify-between flex-wrap gap-y-3  p-4 w-full h-14 bg-neutral-200 fixed top-0' >
        <div className="basis-1/3 flex flex-row justify-evenly flex-wrap  gap-y-3">

          <div><p>Logo</p></div>
          <div><p>searchbar</p></div>
          <div><p>searchbar</p></div>
          <div><p>searchbar</p></div>

        </div>


        <div className='flex flex-row justify-around basis-1/3  ' >
          <p className='text-1xl font-normal ' >This is test organization</p>
          <p className='text-1xl font-normal ' >New IT Venture</p>
          <div>
            <GroupAddIcon className='cursor-pointer' onClick={onDisplay} />
          </div>
          <div>
            <NotificationsIcon className='cursor-pointer' onClick={onDisplay} />
          </div>
          <div>
            <SettingsIcon className='cursor-pointer' onClick={onDisplay} />
          </div>
          <div>
            <HelpIcon className='cursor-pointer' onClick={onDisplay} />
          </div>
          <div>
            <AccountCircleIcon className='cursor-pointer' onClick={onDisplay} />
          </div>
        </div>

      </nav>
      <div style={{ display: display ? "block" : "none" }} className='fixed right-0 top-16 w-96 h-screen  bg-white p-6 text-black shadow-2xl '  >

        <span><CloseIcon className='cursor-pointer absolute right-4' onClick={hideDisplay} /></span>
        <div className='flex flex-col justify-center gap-y-5 mt-10'  >
          <AccountCircleIcon />
          <span>Developer NITV</span>
        </div>
      </div>
    </>
  )
}
