import Header from '../components/Header'
import Features from '../components/Features'
import Download from '../components/Download'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Header
        pictureName="homeHero"
        heading1="connecting"
        heading2="pet lovers"
        paragraph="Buddy,Go! helps you meet other pet enthusiasts around and make new friends."
      />
      <Features />
      <Download />
      <Team />
      <Blog />
      <Contact />
    </div>
  )
}
