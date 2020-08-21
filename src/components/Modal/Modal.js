import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = props => {
  const { show, close, children } = props

  return (
    <>
      <Backdrop show={show} close={close} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <div className={classes.Cert}>
          {children} <button onClick={close}>Close</button>
        </div>
      </div>
    </>
  )
}

export default React.memo(modal)
