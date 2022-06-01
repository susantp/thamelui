import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { sidebarState } from '../../store/atoms'

export default function Content ({ children }) {
  const { open } = useRecoilValue(sidebarState)
  const contentPadding = open ? 'container pl-64 pt-16' : 'container pl-24 pt-16'

  return <div className={contentPadding}>
    {children}
    </div>
}
