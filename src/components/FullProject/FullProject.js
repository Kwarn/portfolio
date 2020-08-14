import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './FullProject.module.css'

const FullProject = props => {
  const listItems = props.lessons.split(', ').map(lesson => (
    <li className={classes.ListItem} key={lesson}>
      {lesson}
    </li>
  ))

  const projectElement = (
    <div
      className={
        props.isMouseOverDraw
          ? `${classes.FullProject} ${classes.OnMouseOverDraw}`
          : classes.FullProject
      }
    >
      <p className={classes.Desc}>{props.desc}</p>
      <p className={classes.ListHeader}>What I learned:</p>
      <ul className={classes.LearnedList}>{listItems}</ul>
      <img src={imageAssets[props.projectId]} alt="burgerBuilder" />
    </div>
  )
  return projectElement
}
export default FullProject
