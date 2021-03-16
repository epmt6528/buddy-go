import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const DIV = styled.div`
  margin: 100px auto;
  max-width: 886px;

  .cardsDiv {
    display: grid;
    grid-template: 1fr 1fr / none;
    margin: 50px 0;

    @media ${device.tablet} {
      grid-template: none / 1fr 1fr;
    }
  }
`
