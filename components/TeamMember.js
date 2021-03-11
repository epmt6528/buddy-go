import Image from 'next/image'

import { DIV } from './TeamMemberStyled'

const TeamMember = (props) => {
  const { pictureName, firstName, lastName, position } = props

  return (
    <DIV className="teamMemberDiv">
      <Image
        src={`/img/Team/TeamMember/${pictureName}.png`}
        width={127}
        height={127}
        alt={`${firstName} ${lastName}`}
      />

      <h3>
        {firstName}
        <br />
        {lastName}
      </h3>

      <p>{position}</p>
    </DIV>
  )
}

export default TeamMember
