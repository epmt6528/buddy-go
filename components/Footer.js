import Image from 'next/image'
import Link from 'next/link'
import { DIV } from './FooterStyled'

const Footer = () => {
  return (
    <DIV>
      <Image src="/img/logo/footerLogo.png" width={160} height={40} alt="Buddy, Go!" />

      <p>
        Developed by <span>Team Rocket</span>
      </p>

      <ul>
        <li>
          <Link href="/">Features</Link>
        </li>
        <li>
          <Link href="/">Download</Link>
        </li>
        <li>
          <Link href="/">Our Team</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <Link href="/">
        <Image src="/img/Footer/topButton.png" width={42} height={46} alt="Top" />
      </Link>
    </DIV>
  )
}

export default Footer
