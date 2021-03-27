import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue } from '../styles/ThemeConfig'

export const DIV = styled.div`
  display: grid;
  grid-template: none / 1fr;
  padding: 0 ${globalValue.edgePadding} 100px;
  max-width: 1425px;

  @media ${device.tablet} {
    padding: 100px;
    grid-template: none / 1fr 1fr;
  }
`
