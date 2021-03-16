import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  margin: 10px;
  padding: 20px 50px;
  cursor: pointer;
  transition: transform 0.25s;

  :hover {
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    padding: 0;
  }

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

    padding: 0 15px;
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
