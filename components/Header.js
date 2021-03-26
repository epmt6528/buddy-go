import Nav from './Nav'
import Image from 'next/image'
import { DIV } from './HeaderStyled'

const Header = (props) => {
  const { pictureName, heading1, heading2, paragraph } = props

  return (
    <DIV style={{ backgroundImage: `url('/img/hero/${pictureName}.png')` }}>
      <Nav />

      <Image src="/img/logo/mobileLogo.png" width={100} height={50} alt="Buddy, Go!" />

      <div className="textDiv">
        <h1>
          {heading1} <br />
          <span>{heading2}</span>
        </h1>
        <p>{paragraph}</p>
      </div>
    </DIV>
  )
}

export default Header
