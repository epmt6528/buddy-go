import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

export const DIV = styled.div`
  max-width: 1425px;
`

export const SCREEN__DIV = styled.div`
  margin: 70px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }

  .screen__div {
    max-width: 540px;
    position: relative;
    right: -60px;
    top: -35px;
    z-index: 2;
  }

  h2 {
    margin-top: 30px !important;
  }
`

export const LINER__DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    position: absolute;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
      display: inline;
    }

    span {
      font-family: 'SF Compact Rounded Ultralight';

      @media ${device.laptop} {
        margin: 0 30px;
      }
    }
  }
`

export const FEATURES__DIV = styled.div`
  margin: 120px auto;
  max-width: 1200px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    @media ${device.laptop} {
      flex-direction: row;

      :hover {
        li {
          filter: grayscale(80%);
          transition: filter 0.5s;

          :hover {
            filter: grayscale(0%);

            p {
              margin-left: 10px;
              width: 226px;
              height: 150px;
              opacity: 1;
            }
          }
        }
      }
    }

    li {
      display: flex;
      align-items: center;
      margin: 10px;

      @media ${device.laptop} {
        margin: 0;
      }

      .image {
        width: 200px;

        @media ${device.laptop} {
          width: auto;
        }
      }

      p {
        margin: 0 20px;

        @media ${device.laptop} {
          margin: 0;
          width: 0;
          height: 0;
          opacity: 0;
          transition: width 0.4s, opacity 0.1s 0.4s;
          overflow: hidden;
        }
      }
    }
  }
`
