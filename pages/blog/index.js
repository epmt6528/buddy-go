import { server } from '../../config'
import Header from '../../components/Header'
import PostList from '../../components/PostList'

import { postsList } from '../../data'

export default function BuddyNews({ posts }) {
  return (
    <div>
      <Header
        pictureName="blogHero"
        heading1="buddy"
        heading2="news"
        paragraph="Stay connected and don’t miss our latest updates"
      />
      <PostList posts={posts} />
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
  // const posts = await res.json()

  const posts = postsList

  return {
    props:
      {
        posts,
      } || {},
  }
}
