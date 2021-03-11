import styled from 'styled-components'

export const DIV = styled.div`
  max-width: 1425px;
`

export const SCREEN__DIV = styled.div`
  margin: 70px 0 0;
  display: flex;
  justify-content: center;

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

    span {
      font-family: 'SF Compact Rounded Ultralight';
      margin: 0 30px;
    }
  }
`

export const FEATURES__DIV = styled.div`
  margin: 120px 0;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      display: flex;
      align-items: center;

      p {
        width: 0;
        height: 0;
        opacity: 0;
        transition: width 0.4s, opacity 0.1s 0.4s;
        overflow: hidden;
      }
    }

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
`
