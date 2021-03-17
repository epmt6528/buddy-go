import BlogCard from './BlogCard'

import { DIV } from './PostListStyled'

const PostList = ({ posts }) => {
  return (
    <DIV>
      {posts.map((post) => (
        <BlogCard post={post} key={post.id} />
      ))}
    </DIV>
  )
}

export default PostList
