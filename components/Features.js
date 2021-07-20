import Image from 'next/image'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'
import { globalValue } from '../styles/ThemeConfig'

const Features = () => {
  return (
    <DIV>
      {/* Top Mockscreen Part */}
      <SCREEN__DIV>
        <div className="screenDiv__textDiv">
          <h2 className="global__areaTitle">
            A social media app <br /> <span>exclusive for pets</span>
          </h2>
          <p className="global__areaDescription">
            Are you a pet lover? Buddy, Go! is a mobile app made for you. Is easy to create a
            profile for your pet and build connections, meet new friends, find tips for cool
            pet-friendly places, and even find a home for a rescued buddy.
          </p>
        </div>

        <Image src="/img/Features/appScreen.png" width={414} height={360} alt="Buddy, Go! screen" />
      </SCREEN__DIV>

      {/* Yello Liner Part */}
      <LINER__DIV id="features">
        <h2 className="global__areaTitle">
          Buddy, Go!{' '}
          <span>
            <div>It's free, </div> <div>local</div> <div>and super easy!</div>
          </span>
        </h2>
      </LINER__DIV>

      {/* Features Part */}
      <FEATURES__DIV>
        <ul>
          <li>
            <div className="image">
              <Image src="/img/Features/getSocial.png" width={174} height={366} className="image" />
            </div>

            <p>
              Share tips and fun places to go with your pets, learn about how to prepare healthy
              meal for chubby buddies, and much more.
            </p>
          </li>
          <li>
            <div className="image">
              <Image src="/img/Features/sharePhotos.png" width={174} height={366} />
            </div>

            <p>
              Share photos and have fun! Check what and where your friends and their pets are doing,
              and get inspired for your next day off.
            </p>
          </li>
          <li>
            <div className="image">
              <Image src="/img/Features/makeFriends.png" width={174} height={366} />
            </div>

            <p>
              Follow other pets, check their profiles and make new friends. Have fun chatting and
              commenting on buddies cool photos.
            </p>
          </li>
          <li>
            <div className="image">
              <Image src="/img/Features/adoptBuddy.png" width={170} height={366} />
            </div>

            <p>
              How about adopting a rescued pet and help the community? Check the “Be my Buddy” feed
              and get to know your new furry friend.
            </p>
          </li>
        </ul>
      </FEATURES__DIV>
    </DIV>
  )
}

const DIV = styled.div`
  max-width: 1425px;
`

const SCREEN__DIV = styled.div`
  margin: 70px 0 0;
  padding: 0 ${globalValue.edgePadding};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }

  .screen__div {
    max-width: 540px;
    position: relative;
    right: -60px;
    top: -35px;
    z-index: 2;
  }

  h2 {
    margin-top: 30px !important;
  }
`

const LINER__DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 40px 0;
  background-image: url('/img/Features/yellowLiner.png');

  h2 {
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
      flex-direction: row;
    }

    span {
      font-family: 'SF Compact Rounded Ultralight';

      display: flex;
      flex-flow: column nowrap;

      @media ${device.laptop} {
        flex-flow: row nowrap;
        margin-left: 20px;
      }

      div {
        text-align: left;

        @media ${device.laptop} {
          margin: 0 15px 0 0;
        }
      }
    }
  }
`

const FEATURES__DIV = styled.div`
  margin: 120px auto;
  max-width: 1200px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;

    @media ${device.laptop} {
      flex-flow: row nowrap;

      :hover {
        li {
          filter: grayscale(80%);
          transition: filter 0.5s;

          :hover {
            filter: grayscale(0%);

            p {
              margin-left: 10px;
              width: 226px;
              height: 150px;
              opacity: 1;
            }
          }
        }
      }
    }

    li {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding: 10px;
      flex-basis: 50%;

      @media ${device.laptop} {
        margin: 0;
        flex-flow: row nowrap;
        flex-basis: auto;
      }

      .image {
        width: 200px;

        @media ${device.laptop} {
          width: auto;
        }
      }

      p {
        width: 250px;
        margin: 20px;

        @media ${device.laptop} {
          margin: 0;
          width: 0;
          height: 0;
          opacity: 0;
          transition: width 0.4s, opacity 0.1s 0.4s;
          overflow: hidden;
        }
      }
    }
  }
`

export default Features
