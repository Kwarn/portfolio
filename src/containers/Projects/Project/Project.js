import React, { useState } from 'react'
import imageAssets from '../../../assets/assets'
import classes from './Project.module.css'
import FullProject from '../../../components/FullProject/FullProject'

const Project = props => {
  const [showFullProject, setShowFullProject] = useState(false)

  const { projectId, project } = props

  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim())
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

  const drawDrop =(
    <div className={!showFullProject ? classes.OpenDrawWrapper : classes.CloseDrawWrapper}>
      <img
        className={classes.DrawIcon}
        src={!showFullProject ? imageAssets.openDraw : imageAssets.closeDraw}
        alt={!showFullProject ? "openDraw" : 'closeDraw'}
      />
    </div>
  )


  const fullProject = showFullProject ? (
    <FullProject projectId={projectId} desc={project.description} />
  ) : null

  return (
    <>
      <div className={classes.ProjectWrapper}>
        <div
          className={classes.Project}
          onClick={() => setShowFullProject(!showFullProject)}
        >
          <h1 className={classes.Title}>{project.title}</h1>
          <div className={classes.Images}>{images}</div>
          <p className={classes.Tech}>{project.previewTechStack}</p>
        </div>
      </div>
      {!showFullProject ? drawDrop : null}
      {fullProject}
      {showFullProject ? drawDrop : null}
    </>
  )
}

export default Project
