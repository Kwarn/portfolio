import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = props => {
  const { show, hide } = props

  return (
    <>
      <Backdrop show={show} hide={hide} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <div className={classes.Content}>{props.children}</div>
        <button onClick={hide}>Close</button>
      </div>
    </>
  )
}

export default React.memo(modal)
