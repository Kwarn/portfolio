import React, { useState, useEffect } from 'react'
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
    wasTouched: false,
    isValid: false,
    value: '',
  })
  const [emailElement, setEmailElement] = useState({
    validation: {
      required: true,
      isEmail: true,
    },
    wasTouched: false,
    isValid: false,
    value: '',
  })
  const [subjectElement, setSubjectElement] = useState({
    validation: {
      required: false,
    },
    wasTouched: false,
    isValid: true,
    value: '',
  })
  const [textBoxElement, setTextBoxElement] = useState({
    validation: {
      required: true,
      minLength: 10,
    },
    wasTouched: false,
    isValid: false,
    value: '',
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [emailHandler, setEmailHandler] = useState({
    isSending: false,
    isSuccess: false,
  })

  useEffect(() => {
    if (nameElement.isValid && emailElement.isValid && textBoxElement.isValid)
      setIsFormValid(true)
    else setIsFormValid(false)
  }, [nameElement, emailElement, subjectElement, textBoxElement])

  const submitHandler = event => {
    event.preventDefault()

    // provide else case to display "fill-out form correctly error"
    if (isFormValid) {
      setEmailHandler({ isSending: true, isSuccess: false })
      emailjs
        .sendForm(
          'gmail',
          'portfoliocontactme',
          'ContactForm',
          process.env.REACT_APP_EMAILJS_API_KEY
        )
        .then(response => {
          setEmailHandler({ isSending: false, isSuccess: true })
        })
        .catch(error => {
          setEmailHandler({ isSending: false, isSuccess: false })
        })
    }
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
        wasTouched: true,
        value: value,
      })
    )
  }

  let formOrSpinner = emailHandler.isSending ? (
    <div>Spinner</div>
  ) : (
    <form
      id="ContactForm"
      className={classes.ContactForm}
      onSubmit={submitHandler}
    >
      <h2>Name</h2>
      <input
        className={
          !nameElement.isValid && nameElement.wasTouched
            ? classes.FormNotValid
            : null
        }
        name="name"
        onChange={event => inputChangedHandler(event.target.value, 'name')}
        value={nameElement.value}
      />
      <h2>Email</h2>
      <input
        className={
          !emailElement.isValid && emailElement.wasTouched
            ? classes.FormNotValid
            : null
        }
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
        className={
          !textBoxElement.isValid && textBoxElement.wasTouched
            ? `${classes.FormNotValid} ${classes.TextBox}`
            : classes.TextBox
        }
        name="message"
        onChange={event => inputChangedHandler(event.target.value, 'textBox')}
        value={textBoxElement.value}
      />
      <button onSubmit={event => submitHandler(event)}>Submit</button>
    </form>
  )

  // conditionally render spinner or form on "emailHandler.isSending"

  return (
    <div className={classes.Contact}>
      <h1 className={classes.SectionTitle}> Contact Me!</h1>
      {formOrSpinner}
    </div>
  )
}

export default Contact
