import { createGlobalStyle } from 'styled-components'

export const color = {
  black: '#000000',
  white: '#ffffff',
  purple: '#49006F',
  yellow: '#FFD23F',
  blue: '#20E9DD',
  pink: '#EA526F',
  gray: '#333333',
}

export const GlobalStyles = createGlobalStyle`
  h1 {
    color: ${color.yellow};
    font-family: 'SF Compact Rounded';
    font-size: 4rem;
  }

  h3{
    color: ${color.pink};
    font-family: 'SF Compact Rounded';
    font-size: 1.5rem;
    line-height: 1;
    margin: 10px 0 0 0
  }

  p{
    color: ${color.gray};
    font-family: 'SF Compact Thin';
    font-size: 1.25rem;
  }

  a{
    color: ${color.white};
    font-family: 'SF Compact Rounded';
    font-size: 1.25rem;
  }

  input{
    width: 500px;
    height: 40px;
    margin: 10px 0;
    padding: 0 20px;
    border: 1px solid #d1d1d1;
    border-radius: 55px; 
    font-family: 'SF Compact Rounded';
    color: ${color.gray};
  }

  textarea{
    width: 500px;
    height: 150px;
    margin: 10px 0;
    padding: 20px 20px;
    border: 1px solid #d1d1d1;
    border-radius: 20px; 
    font-family: 'SF Compact Rounded';
    color: ${color.gray};
  }

  button{
    border: none;
    background-color: ${color.pink};
    width: 192px;
    height: 47px;
    border-radius: 55px;
    color: ${color.white};
    font-size: 1.1rem;
  }
`
