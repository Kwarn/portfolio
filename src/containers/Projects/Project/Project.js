import React from 'react'
import imageAssets from '../../../assets/assets'
import classes from './Project.module.css'

const Project = props => {
  const { project, isSelectedContent, firstElementRef } = props

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

  return (
    <div ref={firstElementRef} className={classes.Project}>
      <div
        className={`${classes.IconsBar} ${
          isSelectedContent ? classes.Highlight : null
        }`}
      >
        <div className={classes.TechImages}>{images}</div>
        <div className={classes.Links}>
          {liveDemoLink}
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
      <div
        className={`${classes.MainContentWrapper} ${
          isSelectedContent ? classes.Highlight : null
        }`}
      >
        <h2> {project.title}</h2>
        <p className={classes.Desc}>{project.description}</p>
        <h3>Key lessons:</h3>
        <p className={classes.Desc}>{project.whatILearned}</p>
        <h3>Technical practices:</h3>
        <ul className={classes.LearnedList}>{technicalPractices}</ul>
      </div>
    </div>
  )
}

export default Project
