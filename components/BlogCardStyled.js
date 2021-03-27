import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue, color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  margin: 30px 0;
  padding: 0 ${globalValue.edgePadding};
  cursor: pointer;
  transition: transform 0.25s;

  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    margin: 30px;
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
