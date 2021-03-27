import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

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

  background-color: ${color.gray};

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px 20px;
  }
`
