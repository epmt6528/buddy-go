export function validateInquiry(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name required'
  }

  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if (!values.message) {
    errors.message = 'Message required'
  }

  return errors
}
