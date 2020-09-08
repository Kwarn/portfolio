import React from 'react'
import classes from './Draw.module.css'

const Draw = ({ isMouseOverDraw, content }) => {
  return (
    <div
      className={
        isMouseOverDraw
          ? `${classes.Draw} ${classes.OnMouseOverDraw}`
          : classes.Draw
      }
    >
      <p className={classes.Content}>{content}</p>
    </div>
  )
}
export default Draw
