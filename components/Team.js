import TeamMember from './TeamMember'

import { OUTER__DIV, DIV, H1 } from './TeamStyled'

const Team = () => {
  return (
    <OUTER__DIV>
      <H1>Our Team</H1>
      <DIV>
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
      </DIV>
    </OUTER__DIV>
  )
}

export default Team
