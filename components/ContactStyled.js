import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue, color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  display: grid;
  grid-template: 0.5fr 1fr / none;
  align-items: center;

  margin: 40px auto 120px;
  padding: 0 ${globalValue.edgePadding};
  max-width: 886px;

  @media ${device.laptop} {
    grid-template: none / 1fr 1fr;
    align-items: start;
  }

  .formDiv {
    width: 100%;

    @media ${device.laptop} {
      padding: 0 0 0 50px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .errorMessages {
      margin: -10px 0 0 20px;
      font-size: 1rem;
      color: ${color.pink};
      align-self: flex-start;
    }

    button {
      margin-top: 20px;
    }
  }
`
