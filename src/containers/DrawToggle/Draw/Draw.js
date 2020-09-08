import React from 'react'
import classes from './Draw.module.css'

const Draw = ({ isMouseOverDraw, content }) => {
  return (
    <div
      className={`${classes.Draw} 
        ${isMouseOverDraw ? classes.OnMouseOverDraw : ''}`}
    >
      <p className={classes.Content}>{content}</p>
    </div>
  )
}
export default Draw
