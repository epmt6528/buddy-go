import Nav from './Nav'

import { DIV, TEXTDIV, H1, SPAN, INNERDIV, P } from './HeaderStyled'

const Header = () => {
  return (
    <DIV>
      <INNERDIV>
        <Nav />

        <TEXTDIV>
          <H1>
            Connecting <br />
            <SPAN>Pet Lovers</SPAN>
          </H1>
          <P>Buddy,Go! helps you meet other pet enthusiasts around and make new friends.</P>
        </TEXTDIV>
      </INNERDIV>
    </DIV>
  )
}

export default Header
