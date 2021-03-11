import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header
        pictureName="homeHero"
        heading1="connecting"
        heading2="pet lovers"
        paragraph="Buddy,Go! helps you meet other pet enthusiasts around and make new friends."
      />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
