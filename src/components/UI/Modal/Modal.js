import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import imageAssets from '../../../assets/assets'

const modal = ({ show, hide, children }) => {
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
        <img
          onClick={hide}
          className={classes.CloseIcon}
          src={imageAssets.whiteCross}
          alt="close modal"
        ></img>
        <div className={classes.Content}>{children}</div>
      </div>
    </>
  )
}

export default React.memo(modal)
