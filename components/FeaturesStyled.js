import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  margin: 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TEXTDIV = styled.div`
  max-width: 540px;
  position: relative;
  right: -60px;
  z-index: 2;
`

export const H1 = styled.h1`
  color: ${color.purple};
  margin-bottom: 0;
`

export const SPAN = styled.span`
  color: ${color.gray};
`

export const P = styled.p`
  max-width: 400px;
  margin-left: 25px;
`
