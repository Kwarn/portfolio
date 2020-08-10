import React from 'react'
import { connect } from 'react-redux'
import classes from './Contact.module.css'

const Contact = props => {
  const submitHandler = () => {}
  const onChangeHandler = event => {}

  return (
    <div className={classes.Contact}>
      <h1> Contact Me!</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          onChange={event => onChangeHandler(event)}
          placeholder="Your name"
        />
        <input placeholder="Your email address" />
        <textarea
          className={classes.TextBox}
          placeholder="Your message here!"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    formValidation: state.contact.formValidation,
  }
}

export default connect(mapStateToProps)(Contact)
