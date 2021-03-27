import Nav from './Nav'
import Image from 'next/image'
import { DIV } from './HeaderStyled'

const Header = (props) => {
  const { page, heading1, heading2, paragraph } = props

  return (
    <DIV>
      <div className={'innerDiv' + ' ' + page}>
        <Nav />

        <Image
          src="/img/logo/smallLogo.png"
          width={50}
          height={50}
          alt="Buddy, Go!"
          className="mobileOnly"
        />

        <Image
          src="/img/logo/mobileLogo.png"
          width={100}
          height={50}
          alt="Buddy, Go!"
          className="mobileOnly"
        />

        <div className="textDiv">
          <h1>
            {heading1} <br />
            <span>{heading2}</span>
          </h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </DIV>
  )
}

export default Header
