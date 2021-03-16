import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: none;

  @media ${device.laptop} {
    margin: 20px auto;
    width: 100%;
    max-width: 1425px;

    display: flex;
    justify-content: space-between;
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
    }
  }

  a {
    color: ${color.purple};
    font-size: 1.25rem;
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
    background-color: ${color.gray};
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
    background-color: ${color.gray};
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
