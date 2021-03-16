import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  width: 100%;
  height: 576px;

  @media ${device.laptop} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .huskyImg {
    position: absolute;
    left: 0;
    z-index: -1;
    opacity: 0.5;

    @media ${device.laptop} {
      position: relative;
      z-index: 0;
      opacity: 1;
      }
    }
  }

  .badgeDiv {
    
    display: flex;

    @media ${device.laptop} {
      margin-right: 160px;
      flex-direction: column;
    }

    > div {
      margin: 0 10px !important;

      @media ${device.laptop} {
        margin-bottom: 30px !important;
      }
    }
    }
  }

  img {
    cursor: pointer;
  }
`
