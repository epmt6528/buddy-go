import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

const Nav = () => {
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
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/#download">Download</Link>
          </li>
          <li>
            <Link href="/#team">Our Team</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </DIV>
      <MOBILEMENU>
        <ul>
          <li>
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/#download">Download</Link>
          </li>
          <li>
            <Link href="/#team">Our Team</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </MOBILEMENU>
    </>
  )
}

const DIV = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    margin: 20px 50px;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 2;
  }

  .logo {
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    li {
      margin: 0 0.75rem;

      color: white;
      font-size: 1.25rem;
    }
  }

  a {
    transition: color 0.5s;

    &:hover {
      color: ${color.pink};
    }
  }
`

const MOBILEMENU = styled.div`
  @media ${device.laptop} {
    display: none;
  }

  background-color: ${color.purple};

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;

  ul {
    padding: 5px 10px 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`

export default Nav
