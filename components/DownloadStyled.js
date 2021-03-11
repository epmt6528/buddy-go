import styled from 'styled-components'

export const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .badgeDiv {
    margin-right: 160px;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 30px !important;
    }
  }

  img {
    cursor: pointer;
  }
`
