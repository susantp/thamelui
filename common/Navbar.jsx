import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
      <>
      
     <Link href="/subscription" >
        <a style={{marginRight:10}}  >sub page </a>
     </Link>

      <Link href="/customer" >
      <a >customer page</a>
   </Link>
   </>
  )
}
