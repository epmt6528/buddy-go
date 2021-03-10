import Link from 'next/link'
import Image from 'next/image'

import { DIV, UL, LI } from './NavStyled'

const Nav = () => {
  return (
    <DIV className="nav__wrapper">
      {/* Buddy, Go! logo */}
      <Image src="/img/logo/headerLogo.png" width={179} height={80} alt="Buddy, Go! logo" />

      <UL>
        <LI>
          <Link href="/">Features</Link>
        </LI>
        <LI>
          <Link href="/">Download</Link>
        </LI>
        <LI>
          <Link href="/">Our Team</Link>
        </LI>
        <LI>
          <Link href="/">Blog</Link>
        </LI>
        <LI>
          <Link href="/">Contact</Link>
        </LI>
      </UL>
    </DIV>
  )
}

export default Nav
