import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
            <Link href="/" ><li>Home</li></Link>
            <Link href="#aboutme"><li>About</li></Link>
            <Link href="/#skills" ><li>Skills</li></Link>
            <Link href="/#contact" ><li>Contact</li></Link>
        </ul> 
      </nav>
    </div>
  )
}
