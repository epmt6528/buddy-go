import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 1425px;

  display: flex;
  justify-content: space-between;

  .logo {
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    li {
      margin: 0 0.75rem;
    }
  }

  a {
    color: ${color.purple};
    font-size: 1.25rem;
    transition: color 0.5s;

    &:hover {
      color: ${color.pink};
    }
  }
`
