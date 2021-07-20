import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

const Footer = () => {
  return (
    <DIV>
      <div>
        <Image src="/img/logo/footerLogo.png" width={160} height={40} alt="Buddy, Go!" />

        <p>
          Developed by <span>Team Rocket</span>
        </p>
      </div>

      <div>
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
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: ${color.purple};
  width: 100%;
  max-width: 1425px;
  padding: 10px 50px;
  flex-direction: column;

  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }
  }

  p {
    color: ${color.white};
    margin-left: 20px;

    span {
      font-family: 'SF Compact Rounded';
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
      margin-right: 10px;
      flex-direction: row;
    }

    li {
      margin: 10px 0;

      @media ${device.tablet} {
        margin: 0 7px;
      }
    }
  }

  a {
    transition: color 0.5s;

    &:hover {
      color: ${color.pink};
    }
  }

  .topButton {
    cursor: pointer;
  }
`

export default Footer
