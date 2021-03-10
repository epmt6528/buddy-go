import Layout from '../components/Layout'
import '../styles/globals.css'

import { GlobalStyles } from './ThemeConfig'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
