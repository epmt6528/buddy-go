import Header from './Header'
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
