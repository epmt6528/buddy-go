import Image from 'next/image'

import { DIV, TEXTDIV, H1, SPAN, P } from './FeaturesStyled'

const Features = () => {
  return (
    <DIV>
      <TEXTDIV>
        <H1>
          A social media app <br /> <SPAN>exclusive for pets</SPAN>
        </H1>
        <P>
          Are you a pet lover? Buddy, Go! is a mobile app made for you. Is easy to create a profile
          for your pet and build connections, meet new friends, find tips for cool pet-friendly
          places, and even find a home for a rescued buddy.
        </P>
      </TEXTDIV>

      <Image src="/img/Features/appScreen.png" width={414} height={360} alt="Buddy, Go! screen" />
    </DIV>
  )
}

export default Features
