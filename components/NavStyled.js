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

  width: 100vw;
  background-color: ${color.purple};

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;

  ul {
    padding: 5px 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`
