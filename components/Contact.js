import { DIV } from './ContactStyled'

const Contact = () => {
  return (
    <DIV id="contact">
      <div className="textDiv">
        <h2 className="global__areaTitle">
          We Want to
          <br />
          <span>Hear From You</span>
        </h2>
        <p className="global__areaDescription">
          Our team is here to help and answer any question you might have. We look forward to hear
          from you.
        </p>
      </div>

      <div className="formDiv">
        <form>
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </DIV>
  )
}

export default Contact
