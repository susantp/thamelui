import React from 'react'
import Link from 'next/link'
import useStyles from '../hooks/dashboard/useStyles'
import useLocalData from '../hooks/dashboard/useData'

export default function Sidebar () {

  const { fontDisplay,customStyle, linkDivStyle, imageWidth } = useStyles()
  const { sidebarMenuList } = useLocalData()
  // const customStyle = open ? 'flex flex-col w-60 fixed pt-32 bg-white border-gray-300 left-0 h-screen overflow-auto drop-shadow-xl z-40 dark:bg-black dark:text-white  transition-all  duration-300 ease-in-out' : 'flex flex-col  w-24 fixed pt-32 bg-white border-gray-300	left-0 h-screen overflow-auto drop-shadow-xl  dark:bg-black dark:text-white transition-all  duration-300 ease-in-out'

  return (
      <div className={customStyle}>
        {sidebarMenuList.map((sidebar, index) =>
          (
            <Link key={index} href={sidebar.link}>
              <div className={linkDivStyle}>
                <img className={imageWidth} src={sidebar.icon} alt={sidebar.icon}/>
                <span className={fontDisplay}> {sidebar.name} </span>
              </div>
            </Link>
          )
        )}
      </div>
  )
}
