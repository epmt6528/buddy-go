import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const DIV = styled.div`
  background-image: url('/img/Team/background.png');
  background-size: cover;
  padding: 70px 20px;
  margin: 70px 0;

  .titleDiv {
    max-width: 886px;
    margin: 0 auto;
  }

  .memberList {
    display: flex;
    flex-flow: row wrap;

    .teamMemberDiv {
      flex: 1 0 50%;

      :nth-child(2n) {
        margin-top: 100px;
      }

      @media ${device.tablet} {
        flex: 1 0 25%;
      }

      @media ${device.laptop} {
        flex: 1;
      }
    }

    .spaceHolder {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media ${device.laptop} {
        display: none;
      }
    }
  }

  h2 {
    margin: 0 0 42px 0;
  }
`
