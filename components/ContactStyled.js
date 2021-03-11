import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0 120px;

  .formDiv {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      margin-top: 20px;
    }
  }
`
