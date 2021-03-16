import { DIV } from './ContactStyled'

// Form Validation
import { validateInquiry } from '../services/errorsForm'
import { contactForm as useForm } from '../services/useForm'

const Contact = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, setValues, errors } = useForm(
    submitForm,
    validateInquiry,
  )

  return (
    <DIV id="contact">
      <div>
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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={values.fullName}
            onChange={handleChange}
          />
          <p className="errorMessages">{errors.fullName}</p>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <p className="errorMessages">{errors.email}</p>
          <textarea
            name="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
          />
          <p className="errorMessages">{errors.message}</p>
          <button>Send</button>
        </form>
      </div>
    </DIV>
  )
}

export default Contact
