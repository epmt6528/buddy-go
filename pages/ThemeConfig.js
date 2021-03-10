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
  @font-face {
    font-family:'SF Compact Light';
    src: url('/fonts/SF-Compact-Text-LightItalic.otf') format('truetype');
  }

  @font-face {
    font-family:'SF Compact Regular';
    src: url('/fonts/SF-Compact-Text-RegularItalic.otf') format('truetype');
  }

  @font-face {
    font-family:'SF Compact Thin';
    src: url('/fonts/SF-Compact-Text-Thin.woff') format('truetype');
  }

  @font-face {
    font-family:'SF Compact Rounded';
    src: url('/fonts/SF-Compact-Text-Rounded-Semibold.ttf') format('truetype');
  }

  h1 {
    color: ${color.yellow};
    font-family: 'SF Compact Rounded';
    font-size: 4rem;
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
`
