import Link from 'next/link'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { color } from '../styles/ThemeConfig'

const PostNav = () => {
  return (
    <DIV>
      <div className="navCardDiv">
        <h3>How Buddy, Go! can help you to adopt a rescued buddy</h3>
        <Link href="/">Read more</Link>
      </div>

      <div className="navCardDiv">
        <h3>Get Your Buddy Ready for the BuddyGo Spring Photo Season</h3>
        <Link href="/">Read more</Link>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${color.purple};
  max-width: 1425px;
  margin: 0 auto 100px;
  cursor: pointer;

  @media ${device.laptop} {
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
  }

  .navCardDiv {
    padding: 50px 0;
    width: 100%;
    border: 1px solid #642784;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover {
      h3 {
        transform: scale(1.2);
      }
    }

    h3 {
      color: ${color.white};
      text-align: center;
      transition: transform 0.25s;
      max-width: 300px;
    }

    a {
      color: ${color.yellow};
      margin: 30px 0 0;
    }
  }
`

export default PostNav
