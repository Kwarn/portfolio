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
      <div className={classes.Project} onClick={props.clicked}>
        <h1 className={classes.Title}>{props.title}{images}</h1>
        
        <p className={classes.Tech}>{props.tech}</p>
        
      </div>
    </>
  )
}

export default Project
