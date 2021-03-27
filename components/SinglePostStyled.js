import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue, color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  @media ${device.laptop} {
    padding: 0;
  }

  .logo {
    @media ${device.laptop} {
      display: none !important;
    }
  }

  .postHeaderDiv {
    max-width: 920px;
    padding: 50px ${globalValue.edgePadding};

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
    width: 100%;
  }

  .postBodyDiv {
    max-width: 920px;
    padding: 50px ${globalValue.edgePadding} 100px;

    p {
      line-height: 1.5;
    }
  }
`
