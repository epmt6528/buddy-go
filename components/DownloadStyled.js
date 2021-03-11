import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-left: 20px;
`
