import Link from 'next/link'

import { DIV } from './PostNavStyled'

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

export default PostNav
