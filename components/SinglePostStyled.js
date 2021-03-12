import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .postHeaderDiv {
    padding: 50px 400px;

    h1 {
      color: ${color.purple};
    }
  }

  .metaDiv {
    display: flex;
    align-items: center;

    p {
      margin-left: 20px;

      span {
        font-family: 'SF Compact Rounded';
      }
    }
  }

  img {
    border-radius: 50px;
  }

  .postBodyDiv {
    padding: 50px 400px;

    p {
      line-height: 1.5;
    }
  }
`
