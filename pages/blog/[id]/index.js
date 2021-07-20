import { server } from '../../../config'
import { SinglePost, NavWhite } from '../../../components'
import { postsList } from '../../../data'

export default function SinglePostPage({ post }) {
  return (
    <div>
      <NavWhite />
      <SinglePost post={post} />
      {/* <PostNav /> */}
    </div>
  )
}

export const getStaticProps = async (context) => {
  // const res = await fetch(`${server}/api/posts/${context.params.id}`, {
  //   method: 'GET',
  //   headers: {
  //     'User-Agent':
  //       'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
  //     Accept: 'application/json; charset=UTF-8',
  //   },
  // })

  const res = postsList[context.params.id - 1]

  const post = res

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  // const res = await fetch(`${server}/api/posts`)
  // const posts = await res.json()

  const ids = postsList.map((post) => post.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
