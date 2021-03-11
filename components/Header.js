import Nav from './Nav'

import { DIV } from './HeaderStyled'

const Header = (props) => {
  const { pictureName, heading1, heading2, paragraph } = props

  return (
    <DIV style={{ backgroundImage: `url('/img/hero/${pictureName}.png')` }}>
      <div className="innerDiv">
        <Nav />

        <div className="textDiv">
          <h1>
            {heading1} <br />
            <span>{heading2}</span>
          </h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </DIV>
  )
}

export default Header
