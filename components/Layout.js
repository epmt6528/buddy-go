import Meta from './Meta'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
