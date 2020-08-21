import React from 'react'
import classes from './DrawContent.module.css'

const DrawContent = props => {
  const { isMouseOverDraw, courseLink } = props

  let content = null

  if (props.isProject) {
    content = (
      <>
        <p className={classes.Desc}>{props.desc}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{props.lessonsListItems}</ul>
      </>
    )
  } else {
    content = (
      <>
        <p>{courseLink}</p>
        <p className={classes.Desc}>{props.desc}</p>
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
