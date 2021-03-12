import Image from 'next/image'

import { DIV } from './BlogCardStyled'

const BlogCard = () => {
  return (
    <DIV>
      <div className="imageDiv">
        <div className="tag">
          <h4>Buddy Tips</h4>
        </div>
        <Image objectFit="cover" src="/img/Blog/blogPicture.jpg" width={588} height={284} />
      </div>

      <h3>How Buddy, Go! Helps Dog Owners to Stay Connected and Build a Community</h3>
      <p>
        This article explain how can get the most from BuddyGo features, such as follow, chat and
        comments and more.
      </p>
    </DIV>
  )
}

export default BlogCard
