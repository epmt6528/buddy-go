import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  margin: 10px;

  .imageDiv {
    position: relative;

    img {
      border-radius: 20px;
    }
  }

  .tag {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 20px;

    width: 100px;
    height: 30px;
    border-radius: 10px;
    color: ${color.purple};
    background-color: ${color.yellow};

    h4 {
      text-align: center;
      line-height: 30px;
      margin: 0;
    }
  }

  h3 {
    color: ${color.purple};
    line-height: 28px;
  }
`
