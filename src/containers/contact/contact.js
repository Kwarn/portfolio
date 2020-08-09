import React from 'react'
import classes from './contact.module.css'

const Contact = props => {
  const submitHandler = () => {}

  return (
    <div className={classes.Contact}>
      <h1> Contact Me!</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input placeholder="Your name" />
        <input placeholder="Your email address" />
        <textarea className={classes.TextBox} placeholder="Your message here!"/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Contact
