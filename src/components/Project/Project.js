import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './Project.module.css'

const Project = props => {
  const { project } = props

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

  return (
    <>
      <div className={classes.IconsBar}>
        <div className={classes.TechImages}>{images}</div>
        <div className={classes.Links}>
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${classes.IconImage} ${classes.LiveDemoLink}`}
              src={imageAssets.showDemo}
              alt="liveDemoLink"
            />
          </a>
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.IconImage}
              src={imageAssets.gitHub}
              alt="gitHub"
            />
          </a>
        </div>
      </div>
      <div className={classes.ProjectDesc}>
        <h2> {project.title}</h2>
        <p className={classes.Desc}>{project.description}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{lessonsListItems}</ul>
      </div>
    </>
  )
}

export default Project
