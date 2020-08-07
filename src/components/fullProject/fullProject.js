import React from 'react'
import classes from './fullProject.module.css'

const FullProject = props => {
  return (
    <div className={classes.FullProject}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}
export default FullProject
