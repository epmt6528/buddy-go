import { useState, useEffect } from 'react'

export const contactForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
    }
  }, [errors])

  return { handleChange, handleSubmit, values, setValues, errors }
}
