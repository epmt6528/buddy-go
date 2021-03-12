import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${color.purple};
  max-width: 1425px;
  margin: 0 auto;

  .navCardDiv {
    padding: 50px 190px;
    border: 1px solid #642784;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      color: ${color.white};
      text-align: center;
    }

    a {
      color: ${color.yellow};
      margin: 30px 0 0;
    }
  }
`
