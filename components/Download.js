import Image from 'next/image'
import Link from 'next/link'
import { DIV } from './DownloadStyled'

const Download = () => {
  return (
    <DIV id="download">
      <Image src="/img/Download/downloadDog.png" width={351} height={573} alt="Husky dog" />

      <div>
        <h2 className="global__areaTitle">
          Download Now <br /> <span>Have Fun!</span>
        </h2>
        <p className="global__areaDescription">
          Buddy,Go! is a mobile app focused on pet lovers. Download it now and build a profile for
          your pet. It’s easy to make new friends, create a social network with local pet
          enthusiasts and show them how special your buddy is.
        </p>
      </div>

      <Link href="https://play.google.com/store/apps">
        <Image src="/img/Download/googlePlayBadge.png" width={205} height={80} alt="Husky dog" />
      </Link>
    </DIV>
  )
}

export default Download
