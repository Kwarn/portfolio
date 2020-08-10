import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './FullProject.module.css'

const FullProject = props => {
  console.log(props)
  const projectElement = (
    <div className={classes.FullProject}>
      <p className={classes.Desc}>{props.desc}</p>
      <img src={imageAssets[props.projectId]} alt="burgerBuilder" />
    </div>
  )
  return projectElement
}
export default FullProject
