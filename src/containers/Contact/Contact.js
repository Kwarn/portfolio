import React, { useState } from 'react'
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
  }

  const nameChangeHandler = value => {
    setNameElement(
      updateObject(nameElement, {
        isValid: validateInput(value, nameElement.validation),
        value: value,
      })
    )
  }

  const emailChangedHandler = value => {
    setEmailElement(
      updateObject(emailElement, {
        isValid: validateInput(value, emailElement.validation),
        value: value,
      })
    )
  }

  const textBoxChangedHandler = value => {
    setTextBoxElement(
      updateObject(textBoxElement, {
        isValid: validateInput(value, textBoxElement.validation),
        value: value,
      })
    )
  }

  // conditionally add css classes base on props.name.isValid

  return (
    <div className={classes.Contact}>
      <h1> Contact Me!</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          onChange={event => nameChangeHandler(event.target.value)}
          placeholder="Your name"
          value={nameElement.value}
        />
        <input
          onChange={event => emailChangedHandler(event.target.value)}
          placeholder="Your email address"
          value={emailElement.value}
        />
        <textarea
          onChange={event => textBoxChangedHandler(event.target.value)}
          className={classes.TextBox}
          placeholder="Your message here!"
          value={textBoxElement.value}
        />
        <button onSubmit={event => submitHandler(event)}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
