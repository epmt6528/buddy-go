import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  position: relative;
  background-size: cover;
  border-radius: 0 0 30% 30%;
  width: 100%;
  max-width: 1425px;
  height: 440px;

  .innerDiv {
    position: relative;
    padding: 0 100px;
    width: 100%;
    height: 440px;
    max-width: 1244px;
  }

  .textDiv {
    position: absolute;
    z-index: 1;
    right: 8rem;
    top: 5.5rem;
    max-width: 400px;
    text-align: right;
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
