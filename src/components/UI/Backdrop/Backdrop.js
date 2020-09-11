import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = ({ show, hide }) =>
  show ? (
    <div onClick={hide} className={classes.Backdrop}></div>
  ) : null

export default backdrop
