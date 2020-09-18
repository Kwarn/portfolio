import React from 'react'
import classes from './Draw.module.css'

const Draw = ({ isMouseOverDraw, content }) => {
  return (
    <div
      className={`${classes.Draw} 
        ${isMouseOverDraw ? classes.OnMouseOverDraw : ''}`}
    >
      <div className={classes.Content}>{content}</div>
    </div>
  )
}
export default Draw
