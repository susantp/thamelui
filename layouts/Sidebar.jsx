import React from 'react'
import Link from 'next/link'
import useStyles from '../hooks/sidebar/useStyles'
import useLocalData from '../hooks/sidebar/useData'

export default function Sidebar () {
  const { fontDisplay, customStyle, linkDivStyle, imageWidth } = useStyles()
  const { sidebarMenuList } = useLocalData()
  return (
    <div className={customStyle}>
      {sidebarMenuList.map((sidebar, index) =>
        (
          <Link key={index} href={sidebar.link}>
            <div className={linkDivStyle}>
              <img className={imageWidth} src={sidebar.icon} alt={sidebar.icon}/>
              <div className={fontDisplay}> {sidebar.name} </div>
            </div>
          </Link>
        )
      )}
    </div>
  )
}
