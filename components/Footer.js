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

      <Link href="/">
        <Image
          src="/img/Footer/topButton.png"
          width={42}
          height={46}
          alt="Top"
          className="topButton"
        />
      </Link>
    </DIV>
  )
}

export default Footer
