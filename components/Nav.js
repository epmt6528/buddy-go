import Link from 'next/link'
import Image from 'next/image'

import { DIV } from './NavStyled'

const Nav = () => {
  return (
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
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </DIV>
  )
}

export default Nav
