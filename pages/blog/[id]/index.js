import { server } from '../../../config'
import NavWhite from '../../../components/NavWhite'
import PostNav from '../../../components/PostNav'
import SinglePost from '../../../components/SinglePost'

export default function SinglePostPage({ post }) {
  return (
    <div>
      <NavWhite />
      <SinglePost post={post} />
      <PostNav />
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`)

  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts/`)

  const posts = await res.json()

  const ids = posts.map((post) => post.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
