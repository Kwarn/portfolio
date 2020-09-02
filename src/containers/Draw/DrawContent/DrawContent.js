import React from 'react'
import classes from './DrawContent.module.css'

const DrawContent = ({ isMouseOverDraw, isProject, desc, lessonsListItems }) => {

  let content = null

  if (isProject) {
    content = (
      <>
        <p className={classes.Desc}>{desc}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{lessonsListItems}</ul>
      </>
    )
  } else {
    content = (
      <>
        <p className={classes.Desc}>{desc}</p>
      </>
    )
  }

  return (
    <div
      className={
        isMouseOverDraw
          ? `${classes.DrawContent} ${classes.OnMouseOverDraw}`
          : classes.DrawContent
      }
    >
      {content}
    </div>
  )
}
export default DrawContent
