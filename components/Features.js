import Image from 'next/image'

import {
  SCREENDIV,
  TEXTDIV,
  H1,
  SPAN,
  P,
  LINERDIV,
  LINERH1,
  LINERSPAN,
  FEATURESDIV,
  FEATURESUL,
  FEATURES__P,
} from './FeaturesStyled'

const Features = () => {
  return (
    <>
      <SCREENDIV>
        <TEXTDIV>
          <H1>
            A social media app <br /> <SPAN>exclusive for pets</SPAN>
          </H1>
          <P>
            Are you a pet lover? Buddy, Go! is a mobile app made for you. Is easy to create a
            profile for your pet and build connections, meet new friends, find tips for cool
            pet-friendly places, and even find a home for a rescued buddy.
          </P>
        </TEXTDIV>

        <Image src="/img/Features/appScreen.png" width={414} height={360} alt="Buddy, Go! screen" />
      </SCREENDIV>

      <LINERDIV>
        <Image src="/img/Features/yellowLiner.png" width={1920} height={247} />
        <LINERH1>
          Buddy, Go! <LINERSPAN>It's free, local and super easy!</LINERSPAN>
        </LINERH1>
      </LINERDIV>

      <FEATURESDIV>
        <FEATURESUL>
          <li>
            <Image src="/img/Features/getSocial.png" width={226} height={488} />
            <FEATURES__P>
              Share tips and fun places to go with your pets, learn about how to prepare healthy
              meal for chubby buddies, and much more.
            </FEATURES__P>
          </li>
          <li>
            <Image src="/img/Features/sharePhotos.png" width={226} height={488} />
            <FEATURES__P>
              Share photos and have fun! Check what and where your friends and their pets are doing,
              and get inspired for your next day off.
            </FEATURES__P>
          </li>
          <li>
            <Image src="/img/Features/makeFriends.png" width={226} height={488} />
            <FEATURES__P>
              Follow other pets, check their profiles and make new friends. Have fun chatting and
              commenting on buddies cool photos.
            </FEATURES__P>
          </li>
          <li>
            <Image src="/img/Features/adoptBuddy.png" width={226} height={488} />
            <FEATURES__P>
              How about adopting a rescued pet and help the community? Check the “Be my Buddy” feed
              and get to know your new furry friend.
            </FEATURES__P>
          </li>
        </FEATURESUL>
      </FEATURESDIV>
    </>
  )
}

export default Features
