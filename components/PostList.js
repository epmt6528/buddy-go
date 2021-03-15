import BlogCard from './BlogCard'

import { DIV } from './PostListStyled'

const PostList = ({ posts }) => {
  return (
    <DIV>
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
    </DIV>
  )
}

export default PostList
