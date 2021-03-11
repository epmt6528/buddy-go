import styled from 'styled-components'

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
    justify-content: space-around;
    align-items: center;

    .teamMemberDiv:nth-child(2n) {
      margin-top: 100px;
    }
  }

  h2 {
    margin: 0 0 42px 0;
  }
`
