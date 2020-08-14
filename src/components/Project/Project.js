import React from 'react'
import imageAssets from '../../assets/assets'
import Draw from '../../containers/Draw/Draw'
import classes from './Project.module.css'

const Project = props => {
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

  const lessonsListItems = project.lessons.split(', ').map(lesson => (
    <li className={classes.ListItem} key={lesson}>
      {lesson}
    </li>
  ))

  const drawContentProps = {
    isProject: true,
    title: project.title,
    lessonsListItems: lessonsListItems,
    projectId: projectId,
    desc: project.description,
    lessons: project.lessons,
    techStack: project.techStack,
  }

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
      <Draw contentType='project' drawContentProps={drawContentProps} />
    </>
  )
}

export default Project
