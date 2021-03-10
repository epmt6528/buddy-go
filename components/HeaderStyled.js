import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  position: relative;
  background-image: url('/img/hero/purpleHero.png');
  background-size: cover;
  border-radius: 0 0 30% 30%;
  width: 100%;
  max-width: 1244px;
  height: 440px;
`

export const INNERDIV = styled.div`
  position: relative;
  padding: 0 100px;
  width: 100%;
  height: 440px;
  max-width: 1244px;
`

export const TEXTDIV = styled.div`
  position: absolute;
  z-index: 1;
  right: 8rem;
  top: 5.5rem;
  max-width: 400px;
  text-align: right;
`

export const H1 = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0;
`

export const SPAN = styled.span`
  color: ${color.white};
`

export const P = styled.p`
  color: ${color.white};
`
