import React from 'react'
import DrawToggle from '../../DrawToggle/DrawControl'
import imageAssets from '../../../assets/assets'
import classes from './Project.module.css'

const Project = ({ project, showModal }) => {
  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim())

  const images = imageTags.map(tag =>
    imageAssets[tag] ? (
      <img
        className={classes.IconImage}
        src={imageAssets[tag]}
        key={tag}
        alt={tag}
      />
    ) : null
  )

  const technicalPractices = project.technicalPractices
    .split(', ')
    .map(practice => (
      <li className={classes.ListItem} key={practice}>
        {practice}
      </li>
    ))

  const liveDemoLink = project.liveDemoLink ? (
    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
      <img
        className={`${classes.IconImage} ${classes.LiveDemoLink}`}
        src={imageAssets.magnifyingGlass}
        alt="liveDemoLink"
      />
    </a>
  ) : null

  const gitHubLink = project.gitHubLink ? (
    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
      <img
        className={classes.IconImage}
        src={imageAssets.gitHub}
        alt="gitHub"
      />
    </a>
  ) : null

  const projectImage = project.image ? (
    <img src={project.image} alt="projectImage" />
  ) : null

  return (
    <div className={`${classes.Project} ${classes.Slide}`}>
      <div className={classes.IconsBar}>
        <div className={classes.TechImages}>{images}</div>
      </div>
      <div className={classes.MainContentWrapper}>
        <DrawToggle
          iconLocation="bottom"
          iconOnly={false}
          drawContent={
            <div>
              <h3>Technical practices</h3>
              <ul className={classes.LearnedList}>{technicalPractices}</ul>
            </div>
          }
        />
        <div className={classes.MainContent}>
          <div className={classes.TitleWrapper}>
            <h2>{project.title}</h2>
            <div className={classes.Links}>
              {liveDemoLink}
              {gitHubLink}
            </div>
          </div>

          <div className={classes.Desc}>
            <p>{project.description}</p>
            <div
              className={classes.ProjectImage}
              onClick={() => showModal(projectImage)}
            >
              {projectImage}
            </div>
          </div>

          <h3>Key lessons</h3>
          <p className={classes.Desc}>{project.whatILearned}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
