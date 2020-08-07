import React from 'react'
import classes from './project.module.css'

const Project = props => {
  return (
    <div className={classes.Project} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <p>{props.tech}</p>
    </div>
  )
}

export default Project
