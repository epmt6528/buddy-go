import { server } from '../config'
import Header from '../components/Header'
import Features from '../components/Features'
import Download from '../components/Download'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

import { postsList } from '../data'

export default function Home({ posts }) {
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
      <Blog posts={posts} />
      <Contact />
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch(`${server}/api/posts`, {
  //   method: 'GET',
  //   headers: {
  //     'User-Agent':
  //       'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
  //     Accept: 'application/json; charset=UTF-8',
  //   },
  // })

  const posts = postsList

  return {
    props:
      {
        posts,
      } || {},
  }
}
