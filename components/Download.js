import Image from 'next/image'

import { DIV, H1, SPAN, P } from './DownloadStyled'

const Download = () => {
  return (
    <DIV>
      <Image src="/img/Download/downloadDog.png" width={351} height={573} alt="Husky dog" />
      <div>
        <H1>
          Download Now <br /> <SPAN>Have Fun!</SPAN>
        </H1>
        <P>
          Buddy,Go! is a mobile app focused on pet lovers. Download it now and build a profile for
          your pet. It’s easy to make new friends, create a social network with local pet
          enthusiasts and show them how special your buddy is.{' '}
        </P>
      </div>
      <Image src="/img/Download/googlePlayBadge.png" width={163} height={63} alt="Husky dog" />
    </DIV>
  )
}

export default Download
