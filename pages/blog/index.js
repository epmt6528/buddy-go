import { server } from '../../config'
import Header from '../../components/Header'
import PostList from '../../components/PostList'

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
  const res = await fetch(`${server}/api/posts`)

  const posts = await res.json()

  return {
    props:
      {
        posts,
      } || {},
  }
}
