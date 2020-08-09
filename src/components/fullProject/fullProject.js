import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './fullProject.module.css'

const FullProject = props => {
  const project = (
    <div className={classes.FullProject}>
      <h1 className={classes.Title}>{props.title}</h1>
      <p className={classes.Desc}>{props.desc}</p>
      <img src={imageAssets[props.projectId]} alt='burgerBuilder' />
    </div>
  )
  return project
}
export default FullProject
