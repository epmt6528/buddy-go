import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue } from '../styles/ThemeConfig'

const Download = () => {
  return (
    <DIV id="download">
      <div className="huskyImg">
        <Image src="/img/Download/downloadDog.png" width={351} height={573} alt="Husky dog" />
      </div>

      <div className="textDiv">
        <h2 className="global__areaTitle">
          Download Now <br /> <span>Have Fun!</span>
        </h2>
        <p className="global__areaDescription">
          Buddy,Go! is a mobile app focused on pet lovers. Download it now and build a profile for
          your pet. It’s easy to make new friends, create a social network with local pet
          enthusiasts and show them how special your buddy is.
        </p>
      </div>

      <div className="badgeDiv">
        <Link href="https://www.apple.com/ca/app-store/">
          <Image src="/img/Download/appStoreBadge.png" width={180} height={60} alt="app store" />
        </Link>

        <Link href="https://play.google.com/store/apps">
          <Image
            src="/img/Download/googlePlayBadge.png"
            width={180}
            height={60}
            alt="google play"
          />
        </Link>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  width: 100%;
  height: 576px;

  @media ${device.laptop} {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .huskyImg {
    position: absolute;
    left: 0;
    z-index: -1;
    opacity: 0.5;

    @media ${device.laptop} {
      position: relative;
      z-index: 0;
      opacity: 1;
      }
    }
  }

  .textDiv{
    padding: 0 ${globalValue.edgePadding};
  }

  .badgeDiv {
    padding: 0 ${globalValue.edgePadding};
    display: flex;

    @media ${device.laptop} {
      margin: 0 80px;
      flex-direction: column;
    }

    > div {
      margin: 0 10px !important;

      @media ${device.laptop} {
        margin-bottom: 30px !important;
      }
    }
    }
  }`

export default Download
