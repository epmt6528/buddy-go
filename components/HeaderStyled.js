import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  position: relative;
  background-size: cover;
  border-radius: 0 0 30% 30%;
  width: 100%;
  max-width: 1425px;
  height: 440px;
  margin: 0 auto;

  .innerDiv {
    position: relative;
    margin: 0 auto;
    padding: 0 100px;
    width: 100%;
    height: 440px;
    max-width: 1244px;
  }

  .textDiv {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    z-index: 1;
    margin: auto;
    text-align: center;
    max-width: 400px;

    @media ${device.laptop} {
      top: auto;
      left: auto;
      right: 8rem;
      top: 5.5rem;
      text-align: right;
    }
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 0;

    span {
      color: ${color.white};
    }
  }

  p {
    color: ${color.white};
  }
`
