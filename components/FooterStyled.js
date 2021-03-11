import styled from 'styled-components'
import { color } from '../pages/ThemeConfig'

export const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.purple};
  width: 100%;
  max-width: 1425px;
  padding: 10px 50px;

  p {
    color: ${color.white};

    span {
      font-family: 'SF Compact Rounded';
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

    li {
      margin: 0 10px;
    }
  }

  a {
    transition: color 0.5s;

    &:hover {
      color: ${color.pink};
    }
  }

  .topButton {
    cursor: pointer;
  }
`
