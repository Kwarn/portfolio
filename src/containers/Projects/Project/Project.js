import React, { useState } from 'react'
import imageAssets from '../../../assets/assets'
import FullProject from '../../../components/FullProject/FullProject'
import classes from './Project.module.css'

const Project = props => {
  const [showFullProject, setShowFullProject] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

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

  const drawDrop = (
    <div
      className={
        !showFullProject ? classes.OpenDrawWrapper : classes.CloseDrawWrapper
      }
      onClick={() => setShowFullProject(!showFullProject)}
    >
      <img
        className={
          isMouseOverDraw
            ? `${classes.DrawIcon} ${classes.ExpandDrawIcon}`
            : classes.DrawIcon
        }
        src={!showFullProject ? imageAssets.openDraw : imageAssets.closeDraw}
        alt={!showFullProject ? 'openDraw' : 'closeDraw'}
      />
    </div>
  )

  const fullProject = showFullProject ? (
    <FullProject
      projectId={projectId}
      desc={project.description}
      lessons={project.lessons}
      techStack={project.techStack}
      isMouseOverDraw={isMouseOverDraw}
      clicked={() => setShowFullProject(false)}
    />
  ) : null

  return (
    <>
      <div className={classes.IconsBar}>
        <div className={classes.TechImages}>{images}</div>
        <div className={classes.Links}>
          <a href={project.liveDemoLink}>
            <img
              className={`${classes.Image} ${classes.LiveDemoLink}`}
              src={imageAssets.showDemo}
              alt="liveDemoLink"
            />
          </a>
          <a href={project.gitHubLink}>
            <img
              className={classes.Image}
              src={imageAssets.gitHub}
              alt="gitHub"
            />
          </a>
        </div>
      </div>

      <div
        className={classes.DrawToggle}
        onMouseOver={() => setIsMouseOverDraw(true)}
        onMouseLeave={() => setIsMouseOverDraw(false)}
        onClick={() => setShowFullProject(!showFullProject)}
      >
        <h1 className={classes.Title}>{project.title}</h1>
      </div>
      {!showFullProject ? drawDrop : null}
      {fullProject}
      {showFullProject ? drawDrop : null}
    </>
  )
}

export default Project
