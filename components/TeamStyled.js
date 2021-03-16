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
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media ${device.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.laptop} {
      grid-template-columns: repeat(4, 1fr);
    }

    @media ${device.laptopL} {
      grid-template-columns: repeat(7, 1fr);
    }

    .teamMemberDiv:nth-child(2n) {
      margin-top: 100px;
    }
  }

  h2 {
    margin: 0 0 42px 0;
  }
`
