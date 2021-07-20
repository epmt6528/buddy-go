import TeamMember from './TeamMember'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '../styles/mediaQueries'

const Team = () => {
  return (
    <DIV id="team">
      <div className="titleDiv">
        <h2 className="global__areaTitle">Our Team</h2>
      </div>

      <div className="memberList">
        <TeamMember
          pictureName="gustavoPalladini"
          firstName="Gustavo"
          lastName="Palladini"
          position="Lead Designer"
        />

        <TeamMember pictureName="lizBrito" firstName="Liz" lastName="Brito" position="Developer" />

        <TeamMember
          pictureName="juliaFrancese"
          firstName="Julia"
          lastName="Francese"
          position="Project Manager"
        />

        <TeamMember
          pictureName="marinaLemos"
          firstName="Marina"
          lastName="Lemos"
          position="Designer"
        />

        <TeamMember
          pictureName="leonartGutz"
          firstName="Leonart"
          lastName="Gutz"
          position="Lead Developer"
        />

        <TeamMember
          pictureName="mandeepHissowal"
          firstName="Mandeep"
          lastName="Hissowal"
          position="Designer"
        />

        <TeamMember
          pictureName="taichiMurai"
          firstName="Taichi"
          lastName="Murai"
          position="Developer"
        />

        {/* Space holde */}
        <div className={'teamMemberDiv' + ' ' + 'spaceHolder'}>
          <Image src={`/img/logo/smallLogoBlack.png`} width={127} height={127} />
        </div>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
  background-image: url('/img/Team/background.png');
  background-size: cover;
  padding: 70px 20px;
  margin: 70px 0;

  .titleDiv {
    max-width: 886px;
    margin: 0 auto;
  }

  .memberList {
    display: flex;
    flex-flow: row wrap;

    .teamMemberDiv {
      flex: 1 0 50%;

      :nth-child(2n) {
        margin-top: 100px;
      }

      @media ${device.tablet} {
        flex: 1 0 25%;
      }

      @media ${device.laptop} {
        flex: 1;
      }
    }

    .spaceHolder {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      @media ${device.laptop} {
        display: none;
      }
    }
  }

  h2 {
    margin: 0 0 42px 0;
  }
`

export default Team
