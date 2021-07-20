import { useEffect, useState } from 'react'
import { Layout } from '../components'
import '../styles/globals.css'
import { GlobalStyles } from '../styles/ThemeConfig'

const App = ({ Component, pageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Layout style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
      <GlobalStyles />

      <Component {...pageProps} />
    </Layout>
  )
}

export default App
