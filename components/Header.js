import Nav from './Nav'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue, color } from '../styles/ThemeConfig'

const Header = (props) => {
  const { page, heading1, heading2, paragraph } = props

  return (
    <DIV>
      <div className={`innerDiv ${page}`}>
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

export const DIV = styled.div`
  .innerDiv {
    margin: 0 auto;
    width: 100%;
    max-width: ${globalValue.maxWidth};
    height: 300px;

    position: relative;
    background-size: cover;
    border-radius: 0 0 20% 20%;
    background-image: url('/img/hero/purple.png');

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
      height: 440px;
      border-radius: 0 0 30% 30%;
    }

    @media ${device.laptop} {
      display: block;
    }
  }

  .innerDiv.home {
    @media ${device.laptop} {
      background-image: url('/img/hero/homeHero.png');
    }
  }

  .innerDiv.blog {
    @media ${device.laptop} {
      background-image: url('/img/hero/blogHero.png');
    }
  }

  .textDiv {
    max-width: 250px;
    margin: 10px auto;
    text-align: center;

    @media ${device.tablet} {
      max-width: 400px;
    }

    @media ${device.laptop} {
      position: absolute;
      top: 5.5rem;
      right: 8rem;
      text-align: right;
    }

    h1 {
      text-transform: uppercase;
      margin: 0;

      span {
        color: ${color.white};
      }
    }

    p {
      color: ${color.white};
    }
  }

  .mobileOnly {
    @media ${device.laptop} {
      display: none !important;
    }
  }
`

export default Header
