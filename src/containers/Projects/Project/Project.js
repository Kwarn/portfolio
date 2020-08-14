import React, { useState } from 'react'
import imageAssets from '../../../assets/assets'
import FullProject from '../../../components/FullProject/FullProject'
import classes from './Project.module.css'
import Draw from '../../../components/Ui/Draw'

const Project = props => {
  // const [showFullProject, setShowFullProject] = useState(false)
  // const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  const { projectId, project } = props

  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim())
  let images = []
  for (let tag of imageTags) {
    if (tag in imageAssets) {
      images.push(
        <img
          className={classes.IconImage}
          src={imageAssets[tag]}
          key={tag}
          alt={tag}
        />
      )
    }
  }

  // const toggleDrawhandler = () => {
  //   setShowFullProject(!showFullProject)
  //   setIsMouseOverDraw(false)
  // }

  // const drawDrop = (
  //   <div
  //     className={
  //       !showFullProject ? classes.OpenDrawWrapper : classes.CloseDrawWrapper
  //     }
  //     onClick={() => toggleDrawhandler()}
  //     onMouseEnter={() => setIsMouseOverDraw(true)}
  //     onMouseLeave={() => setIsMouseOverDraw(false)}
  //   >
  //     <img
  //       className={
  //         isMouseOverDraw
  //           ? `${classes.DrawIcon} ${classes.ExpandDrawIcon}`
  //           : classes.DrawIcon
  //       }
  //       src={!showFullProject ? imageAssets.openDraw : imageAssets.closeDraw}
  //       alt={!showFullProject ? 'openDraw' : 'closeDraw'}
  //     />
  //   </div>
  // )

  const fullProject = (
    <FullProject
      projectId={projectId}
      desc={project.description}
      lessons={project.lessons}
      techStack={project.techStack}
    />
  )

  return (
    <>
      <div className={classes.IconsBar}>
        <div className={classes.TechImages}>{images}</div>
        <div className={classes.Links}>
          <a href={project.liveDemoLink}>
            <img
              className={`${classes.IconImage} ${classes.LiveDemoLink}`}
              src={imageAssets.showDemo}
              alt="liveDemoLink"
            />
          </a>
          <a href={project.gitHubLink}>
            <img
              className={classes.IconImage}
              src={imageAssets.gitHub}
              alt="gitHub"
            />
          </a>
        </div>
      </div>
      <Draw title={project.title} openDrawContent={fullProject} />
    </>
  )
}

export default Project
