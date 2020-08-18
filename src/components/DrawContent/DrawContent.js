import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './DrawContent.module.css'

const DrawContent = props => {
  const { isMouseOverDraw, cert, courseLink } = props

  let content = null

  if (props.isProject) {
    content = (
      <>
        <p className={classes.Desc}>{props.desc}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{props.lessonsListItems}</ul>
        <img src={imageAssets[props.projectId]} alt={props.projectId} />
      </>
    )
  } else {
    content = (
      <>
        <p>{courseLink}</p>
        {cert}
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
