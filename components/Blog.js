import BlogCard from './BlogCard'

import { DIV } from './BlogStyled'

const Blog = ({ posts }) => {
  return (
    <DIV id="blog">
      <div>
        <h2 className="global__areaTitle">Buddy News</h2>
      </div>

      <div className="cardsDiv">
        <BlogCard post={posts[0]} />
        <BlogCard post={posts[1]} />
      </div>
    </DIV>
  )
}

export default Blog
