import styled from 'styled-components'

export const DIV = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto 120px;
  max-width: 886px;

  .formDiv {
    padding: 0 0 0 50px;
    width: 100%;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      margin-top: 20px;
    }
  }
`
