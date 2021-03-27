import { server } from '../config'
import Image from 'next/image'
import Link from 'next/link'
import { DIV } from './SinglePostStyled'

const SinglePost = ({ post }) => {
  return (
    <DIV>
      <Link href="/">
        <Image
          src="/img/logo/headerWhiteLogo.png"
          width={179}
          height={80}
          alt="Buddy, Go!"
          className="logo"
        />
      </Link>

      <div className="postHeaderDiv">
        <h1>{post.title}</h1>

        <div className="metaDiv">
          <Image
            src={`/img/Team/TeamMember/${post.authorPicture}.png`}
            width={70}
            height={70}
            alt="author"
          />
          <p>
            By <span>{post.author}</span>
          </p>
          <p>{post.postedAt}</p>
        </div>
      </div>

      <Image objectFit="cover" src={`/img/Blog/${post.postPicture}`} width={1425} height={583} />

      <div className="postBodyDiv">
        <p>{post.body}</p>
      </div>
    </DIV>
  )
}

export default SinglePost

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts/`)

  const posts = await res.json()

  const ids = posts.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
