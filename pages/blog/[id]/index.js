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
  const res = await fetch(`${server}/api/posts/${context.params.id}`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })

  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`, {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })

  // const posts = await res.json()
  const posts = await res.text()
  console.log(posts)

  const ids = posts.map((post) => post.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
