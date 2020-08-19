import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { validateInput } from '../../shared/validation'
import { updateObject } from '../../shared/Utility'
import classes from './Contact.module.css'

const Contact = props => {
  const [nameElement, setNameElement] = useState({
    validation: {
      required: true,
      minLength: 2,
    },
    isValid: false,
    value: '',
  })
  const [emailElement, setEmailElement] = useState({
    validation: {
      required: true,
      isEmail: true,
    },
    isValid: false,
    value: '',
  })
  const [subjectElement, setSubjectElement] = useState({
    validation: {
      required: false,
    },
    isValid: true,
    value: '',
  })
  const [textBoxElement, setTextBoxElement] = useState({
    validation: {
      required: true,
      minLength: 10,
    },
    isValid: false,
    value: '',
  })
  const [isFormValid, setIsFormValid] = useState(false)

  const submitHandler = event => {
    event.preventDefault()
    if (nameElement.isValid && emailElement.isValid && textBoxElement.isValid)
      setIsFormValid(true)
    else setIsFormValid(false)
    console.log(isFormValid)

    emailjs.sendForm(
      'gmail',
      'portfoliocontactme',
      'ContactForm',
      process.env.REACT_APP_GOOGLE_API_KEY
    )
  }

  const inputChangedHandler = (value, elementIdentifier) => {
    let targetElement
    let setTargetElement

    if (elementIdentifier === 'name') {
      targetElement = nameElement
      setTargetElement = setNameElement
    }
    if (elementIdentifier === 'email') {
      targetElement = emailElement
      setTargetElement = setEmailElement
    }
    if (elementIdentifier === 'subject') {
      targetElement = subjectElement
      setTargetElement = setSubjectElement
    }
    if (elementIdentifier === 'textBox') {
      targetElement = textBoxElement
      setTargetElement = setTextBoxElement
    }
    setTargetElement(
      updateObject(targetElement, {
        isValid: validateInput(value, targetElement.validation),
        value: value,
      })
    )
  }

  // conditionally add css classes base on props.name.isValid

  return (
    <div className={classes.Contact}>
      <h1 className={classes.SectionTitle}> Contact Me!</h1>
      <form
        id="ContactForm"
        className={classes.ContactForm}
        onSubmit={submitHandler}
      >
        <h2>Name</h2>
        <input
          name="name"
          onChange={event => inputChangedHandler(event.target.value, 'name')}
          value={nameElement.value}
        />
        <h2>Email</h2>
        <input
          name="email"
          onChange={event => inputChangedHandler(event.target.value, 'email')}
          value={emailElement.value}
        />
        <h2>Subject</h2>
        <input
          name="subject"
          onChange={event => inputChangedHandler(event.target.value, 'subject')}
          value={subjectElement.value}
        />
        <h2>Message</h2>
        <textarea
          name="message"
          onChange={event => inputChangedHandler(event.target.value, 'textBox')}
          className={classes.TextBox}
          value={textBoxElement.value}
        />
        <button onSubmit={event => submitHandler(event)}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
