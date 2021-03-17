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
  const res = await fetch(`${server}/api/posts`, {
    method: 'GET',
    headers: {
      // update with your user-agent
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
      Accept: 'application/json; charset=UTF-8',
    },
  })
  const posts = await res.json()

  // .then(async (response) => {
  //   try {
  //     const res = await response.json()
  //     console.log('response data?', res)

  //     return res
  //   } catch (error) {
  //     console.log('Error happened here!')
  //     console.error(error)
  //   }
  // })

  return {
    props:
      {
        posts,
      } || {},
  }
}
