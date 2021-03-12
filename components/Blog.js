import BlogCard from './BlogCard'

import { DIV } from './BlogStyled'

const Blog = () => {
  return (
    <DIV id="blog">
      <div>
        <h2 className="global__areaTitle">Buddy News</h2>
      </div>

      <div className="cardsDiv">
        <BlogCard />
        <BlogCard />
      </div>
    </DIV>
  )
}

export default Blog
