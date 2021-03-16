import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

export const DIV = styled.div`
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

export const MOBILEMENU = styled.div`
  @media ${device.laptop} {
    display: none;
  }

  .mobileMenuButton {
    position: fixed;
    left: calc(50% - 100px / 2);
    background-color: ${color.purple};
    padding: 20px 20px 10px;
    border-radius: 50% 50% 0 0;
    z-index: 5;
    bottom: 0;
    transition: bottom 0.5s;

    :hover {
      cursor: pointer;
    }
  }

  .mobileMenu {
    background-color: ${color.purple};
    width: 100vw;

    position: fixed;
    z-index: 5;
    left: 0;
    right: 0;
    transition: bottom 0.5s;
  }

  .closed {
    bottom: -172px;
  }

  .opened {
    bottom: 0;

    .mobileMenuButton {
      bottom: 140px;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    a {
      transition: color 0.5s;

      &:hover {
        color: ${color.pink};
      }
    }
  }
`
