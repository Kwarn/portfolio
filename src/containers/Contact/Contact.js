import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import classes from './Contact.module.css'

const Contact = props => {
  // const {name, email, textBox} = props
  // useEffect(() => {
  //   console.log('rerendered')
  // }, [name])


  const submitHandler = () => {}
  const onChangeHandler = (event, inputIdentifier) =>
    props.onInputChanged(event, inputIdentifier)

   
  if (!props.name.isValid){
    
  }

  // conditionally add css classes base on props.name.isValid

  return (
    <div className={classes.Contact}>
      <h1> Contact Me!</h1>
      <form className={classes.Form} onSubmit={submitHandler}>
        <input
          onChange={event => onChangeHandler(event, 'name')}
          placeholder="Your name"
          value={props.name.value}
        />
        <input
          onChange={event => onChangeHandler(event, 'email')}
          placeholder="Your email address"
          value={props.email.value}
        />
        <textarea
          onChange={event => onChangeHandler(event, 'textBox')}
          className={classes.TextBox}
          placeholder="Your message here!"
          value={props.textBox.value}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    formValidation: state.contact.formValidation,
    name: state.contact.inputForm.name,
    email: state.contact.inputForm.email,
    textBox: state.contact.inputForm.textBox,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInputChanged: (event, inputIdentifier) =>
      dispatch(actions.inputChangedHandler(event, inputIdentifier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
