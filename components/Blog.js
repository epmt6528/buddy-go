import BlogCard from './BlogCard'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

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

const DIV = styled.div`
  margin: 100px auto;
  max-width: 886px;

  .cardsDiv {
    display: grid;
    grid-template: 1fr 1fr / none;
    margin: 50px 0;

    @media ${device.tablet} {
      grid-template: none / 1fr 1fr;
    }
  }
`

export default Blog
