import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  margin: 20px 50px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  right: 0;
  left: 0;
  z-index: 2;

  .logo {
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    li {
      margin: 0 0.75rem;

      color: white;
      font-size: 1.25rem;
    }
  }

  a {
    transition: color 0.5s;

    &:hover {
      color: ${color.pink};
    }
  }
`
