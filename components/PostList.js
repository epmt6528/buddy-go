import BlogCard from './BlogCard'

import { DIV } from './PostListStyled'

const PostList = ({ posts }) => {
  return (
    <DIV>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      {posts.map((post) => (
        <BlogCard post={post} />
      ))}
    </DIV>
  )
}

export default PostList
