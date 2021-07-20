import Meta from './Meta'
import Footer from './Footer'

const Layout = (props) => {
  const { style, children } = props

  return (
    <div>
      <Meta />
      <main style={style}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
