import Image from 'next/image'
import styled from 'styled-components'

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

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    text-align: center;
  }

  p {
    text-align: center;
    margin: 5px;
  }
`

export default TeamMember
