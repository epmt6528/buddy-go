import BlogCard from './BlogCard'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue } from '../styles/ThemeConfig'

const PostList = ({ posts }) => {
  return (
    <DIV>
      {posts.map((post) => (
        <BlogCard post={post} key={post.id} />
      ))}
    </DIV>
  )
}

const DIV = styled.div`
  display: grid;
  grid-template: none / 1fr;
  padding: 0 ${globalValue.edgePadding} 100px;
  max-width: 1425px;

  @media ${device.tablet} {
    padding: 100px;
    grid-template: none / 1fr 1fr;
  }
`

export default PostList
