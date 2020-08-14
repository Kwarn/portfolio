import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './DrawContent.module.css'

const DrawContent = props => {
  const { isMouseOverDraw } = props

  let content = null

  if (props.isProject) {
    content = (
      <>
        <p className={classes.Desc}>{props.desc}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{props.lessonsListItems}</ul>
        <img src={imageAssets[props.projectId]} alt="burgerBuilder" />{' '}
      </>
    )
  } else {
    content = <p className={classes.Desc}>{props.desc}</p>
  }

  return (
    <div
      className={
        props.isMouseOverDraw
          ? `${classes.DrawContent} ${classes.OnMouseOverDraw}`
          : classes.DrawContent
      }
    >
      {content}
    </div>
  )
}
export default DrawContent
