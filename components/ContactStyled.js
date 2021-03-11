import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  justify-content: space-around;

  .textDiv {
    h1 {
      margin: 0;
      color: ${color.purple};
    }

    span {
      color: ${color.gray};
    }

    p {
      margin-left: 20px;
      max-width: 400px;
    }
  }

  .formDiv {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
