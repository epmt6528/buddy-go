import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { DIV, MOBILEMENU } from './NavStyled'

const Nav = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState('closed')

  const toggleMobileMenu = () => {
    if (mobileMenuToggle === 'closed') setMobileMenuToggle('opened')
    else setMobileMenuToggle('closed')
  }

  return (
    <>
      <DIV className="nav__wrapper">
        {/* Buddy, Go! logo */}
        <Link href="/">
          <Image
            src="/img/logo/headerLogo.png"
            width={179}
            height={80}
            alt="Buddy, Go!"
            className="logo"
          />
        </Link>

        <ul>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#download">Download</Link>
          </li>
          <li>
            <Link href="#team">Our Team</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </DIV>
      <MOBILEMENU>
        <div className={`mobileMenu ${mobileMenuToggle}`}>
          <div className="mobileMenuButton" onClick={toggleMobileMenu}>
            <Image
              src="/img/logo/smallLogo.png"
              width={80}
              height={80}
              alt="Buddy, Go!"
              className="logo"
            />
          </div>
          <ul>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#download">Download</Link>
            </li>
            <li>
              <Link href="#team">Our Team</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </MOBILEMENU>
    </>
  )
}

export default Nav
