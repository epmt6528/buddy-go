import Image from 'next/image'

import { DIV, SCREEN__DIV, LINER__DIV, FEATURES__DIV } from './FeaturesStyled'

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

export default Features
