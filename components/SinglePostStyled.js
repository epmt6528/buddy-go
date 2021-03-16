import styled from 'styled-components'
import { color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .postHeaderDiv {
    max-width: 920px;
    padding: 50px 0;

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
    max-width: 920px;
    padding: 50px 0;

    p {
      line-height: 1.5;
    }
  }
`
