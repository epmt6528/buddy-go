import { DIV } from './ContactStyled'

const Contact = () => {
  return (
    <DIV>
      <div className="textDiv">
        <h1>
          We Want to Hear <br />
          <span>From You</span>
        </h1>
        <p>
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
