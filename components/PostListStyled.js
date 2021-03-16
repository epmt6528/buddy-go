import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const DIV = styled.div`
  display: grid;
  grid-template: none / 1fr;
  padding: 100px;
  max-width: 1425px;

  @media ${device.tablet} {
    grid-template: none / 1fr 1fr;
  }
`
