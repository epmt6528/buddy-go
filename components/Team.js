import TeamMember from './TeamMember'

import { DIV } from './TeamStyled'

const Team = () => {
  return (
    <DIV id="team">
      <h2 className="global__areaTitle">Our Team</h2>

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
      </div>
    </DIV>
  )
}

export default Team
