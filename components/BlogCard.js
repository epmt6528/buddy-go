import Link from 'next/link'
import Image from 'next/image'

import { DIV } from './BlogCardStyled'

const BlogCard = ({ post }) => {
  return (
    <Link href="/posts/[id]" as={`posts/`}>
      <DIV>
        <div className="imageDiv">
          <div className="tag">
            <h4>{post.tag}</h4>
          </div>
          <Image objectFit="cover" src={`/img/Blog/${post.postPicture}`} width={588} height={284} />
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </DIV>
    </Link>
  )
}

export default BlogCard
