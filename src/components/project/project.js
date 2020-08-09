import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './project.module.css'

const Project = props => {
  const imageTags = props.tech.split(',').map(tag => tag.toLowerCase().trim())
  let images = []
  for (let tag of imageTags) {
    if (tag in imageAssets) {
      images.push(
        <img
          className={classes.Image}
          src={imageAssets[tag]}
          key={tag}
          alt={tag}
        />
      )
    }
  }

  return (
    <>
      <div className={classes.ProjectWrapper}>
        <div className={classes.Project} onClick={props.clicked}>
          <h1 className={classes.Title}>{props.title}</h1>
          <div className={classes.Images}>{images}</div>
          <p className={classes.Tech}>{props.tech}</p>
        </div>
      </div>
    </>
  )
}

export default Project
