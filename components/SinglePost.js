import Image from 'next/image'

import { DIV } from './SinglePostStyled'

const SinglePost = () => {
  return (
    <DIV>
      <div className="postHeaderDiv">
        <h1>How Buddy, Go! Helps Dog Owners to Stay Connected and Build a Community</h1>

        <div className="metaDiv">
          <Image src="/img/Team/TeamMember/marinaLemos.png" width={70} height={70} alt="author" />
          <p>
            By <span>Marina Lemos</span>
          </p>
          <p>March 20, 2021</p>
        </div>
      </div>

      <Image objectFit="cover" src="/img/Blog/blogPicture.jpg" width={1425} height={583} />

      <div className="postBodyDiv">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lobortis est. Cras a
          sagittis felis. In in imperdiet ex. Proin mattis porttitor metus, vel dictum mi sagittis
          at. Curabitur sed ex erat. Vestibulum accumsan felis porta velit maximus dapibus.
          Curabitur et pharetra ex. Pellentesque interdum sollicitudin hendrerit. Morbi eu orci
          aliquet, commodo massa at, mattis tellus. Vestibulum ut metus consequat ante vulputate
          volutpat. Pellentesque eget felis purus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Vestibulum sed vulputate velit, semper rutrum enim.
        </p>
        <p>
          In lacinia, orci dignissim cursus luctus, nisi eros pulvinar arcu, non posuere ligula
          sapien sed urna. Donec at tempus mi. Suspendisse nec orci ac elit tincidunt efficitur quis
          quis mauris. Curabitur pharetra, lorem non luctus finibus, felis quam porttitor nibh, vel
          pharetra nulla nunc vel quam. Vivamus eget vestibulum sapien. Nulla ultrices quam in
          blandit gravida. Curabitur tincidunt risus sed sem blandit accumsan. Sed a eros nibh.
        </p>
        <p>
          Proin turpis diam, varius aliquam mauris vel, dapibus auctor dolor. Phasellus rhoncus est
          sit amet ligula rhoncus, non ultricies metus convallis. Proin interdum, massa ut tristique
          aliquam, ante felis pulvinar tortor, nec egestas odio felis eu augue. Morbi tincidunt, est
          sit amet malesuada placerat, ipsum nisi bibendum diam, vel vehicula nulla elit sit amet
          dolor. Curabitur ultrices risus sed mauris sagittis, vitae euismod mauris egestas. In eget
          consequat nisl, sed pretium nisi. Pellentesque vitae hendrerit metus. Maecenas scelerisque
          nulla arcu, vitae porttitor erat malesuada ac. Aliquam eget pellentesque justo.
        </p>
      </div>
    </DIV>
  )
}

export default SinglePost
