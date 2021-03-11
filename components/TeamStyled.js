import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const OUTER__DIV = styled.div`
  background-image: url('/img/Team/background.png');
  padding: 70px 20px;
  margin: 70px 0;
`

export const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .teamMemberDiv:nth-child(2n) {
    margin-top: 100px;
  }
`

export const H1 = styled.h1`
  color: ${color.purple};
  margin: 0 0 42px 100px;
`
