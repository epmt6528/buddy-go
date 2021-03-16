import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

export const DIV = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: ${color.purple};
  width: 100%;
  max-width: 1425px;
  padding: 10px 50px;
  flex-direction: column;

  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }
  }

  p {
    color: ${color.white};
    margin-left: 20px;

    span {
      font-family: 'SF Compact Rounded';
      text-transform: uppercase;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media ${device.tablet} {
      margin-right: 10px;
      flex-direction: row;
    }

    li {
      margin: 10px 0;

      @media ${device.tablet} {
        margin: 0 7px;
      }
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
