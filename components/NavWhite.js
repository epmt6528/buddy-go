import Link from 'next/link'
import Image from 'next/image'

import { DIV } from './NavWhiteStyled'

const NavWhite = () => {
  return (
    <DIV>
      {/* Buddy, Go! logo */}
      <Link href="/">
        <Image
          src="/img/logo/headerWhiteLogo.png"
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

export default NavWhite
