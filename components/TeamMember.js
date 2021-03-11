import Image from 'next/image'

import { DIV, P, H3 } from './TeamMemberStyled'

const TeamMember = (props) => {
  const { pictureName, firstName, lastName, position } = props

  return (
    <DIV className="teamMemberDiv">
      <Image
        src={`/img/Team/TeamMember/${pictureName}.png`}
        width={107}
        height={107}
        alt={`${firstName} ${lastName}`}
      />
      <H3>
        {firstName}
        <br />
        {lastName}
      </H3>
      <P>{position}</P>
    </DIV>
  )
}

export default TeamMember
