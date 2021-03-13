import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto 120px;
  max-width: 886px;

  .formDiv {
    padding: 0 0 0 50px;
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .errorMessages {
      margin: -10px 0 0 20px;
      font-size: 1rem;
      color: ${color.pink};
      align-self: flex-start;
    }

    button {
      margin-top: 20px;
    }
  }
`
