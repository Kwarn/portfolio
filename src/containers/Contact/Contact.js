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

  const inputChangedHandler = (value, elementIdentifier) => {
    let targetElement;
    let setTargetElement;
    
    if (elementIdentifier === 'name') {
      targetElement = nameElement
      setTargetElement = setNameElement
    }
    if (elementIdentifier === 'email') {
      targetElement = emailElement
      setTargetElement = setEmailElement
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
      <h1> Contact Me!</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          onChange={event => inputChangedHandler(event.target.value, 'name')}
          placeholder="Your name"
          value={nameElement.value}
        />
        <input
          onChange={event => inputChangedHandler(event.target.value, 'email')}
          placeholder="Your email address"
          value={emailElement.value}
        />
        <textarea
          onChange={event => inputChangedHandler(event.target.value, 'textBox')}
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
