import { server } from '../config'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue, color } from '../styles/ThemeConfig'

const SinglePost = ({ post }) => {
  return (
    <DIV>
      <Link href="/">
        <Image
          src="/img/logo/headerWhiteLogo.png"
          width={179}
          height={80}
          alt="Buddy, Go!"
          className="logo"
        />
      </Link>

      <div className="postHeaderDiv">
        <h1>{post.title}</h1>

        <div className="metaDiv">
          <Image
            src={`/img/Team/TeamMember/${post.authorPicture}.png`}
            width={70}
            height={70}
            alt="author"
          />
          <p>
            By <span>{post.author}</span>
          </p>
          <p>{post.postedAt}</p>
        </div>
      </div>

      <Image objectFit="cover" src={`/img/Blog/${post.postPicture}`} width={1425} height={583} />

      <div className="postBodyDiv">
        <p>{post.body}</p>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  @media ${device.laptop} {
    padding: 0;
  }

  .logo {
    @media ${device.laptop} {
      display: none !important;
    }
  }

  .postHeaderDiv {
    max-width: 920px;
    padding: 50px ${globalValue.edgePadding};

    h1 {
      color: ${color.purple};
    }
  }

  .metaDiv {
    display: flex;
    align-items: center;

    p {
      margin-left: 20px;

      span {
        font-family: 'SF Compact Rounded';
      }
    }
  }

  img {
    width: 100%;
  }

  .postBodyDiv {
    max-width: 920px;
    padding: 50px ${globalValue.edgePadding} 100px;

    p {
      line-height: 1.5;
    }
  }
`

export default SinglePost

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts/`)

  const posts = await res.json()

  const ids = posts.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
