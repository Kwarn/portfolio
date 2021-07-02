import React from 'react';
import imageAssets from '../../../assets/assets';
import classes from './Project.module.css';


const Project = ({ project, showModalCb, closeModalCb }) => {
  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim());

  const techIcons = imageTags.map(tag =>
    imageAssets[tag] ? (
      <img
        className={classes.TechIcon}
        src={imageAssets[tag]}
        key={tag}
        alt={tag}
      />
    ) : null
  );

  const externalLinks = (
    <div className={classes.ExternalLinks}>
      {project.liveDemoLink ? (
        <a
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      ) : null}
      {project.gitHubLink ? (
        <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      ) : null}
    </div>
  );

  const technicalPractices = project.technicalPractices
    .split(', ')
    .map(practice => (
      <li className={classes.TechnicalPractice} key={practice}>
        {practice}
      </li>
    ));

  const pLinks = [];
  if (project.projectLinks) {
    for (let projectTitle in project.projectLinks)
      pLinks.push(
        <div key={projectTitle} className={classes.projectLink}>
          <a href={project.projectLinks[projectTitle].link}>
            {project.projectLinks[projectTitle].description}
          </a>
        </div>
      );
  }

  return (
    <div className={`${classes.ProjectWrapper} ${classes.Font}`}>
      <div className={classes.Project}>
        <div className={classes.BlocksWrapper}>
          <div className={classes.TechnicalBlock}>
            <div className={classes.TechIconsWrapper}>{techIcons}</div>
            <div className={classes.TechnicalMainContent}>
              <div className={classes.TechnicalHeader}>
                <h1>The Technical Stuff..</h1>
              </div>
              <ul className={classes.TechnicalPracticesList}>
                {technicalPractices}
              </ul>
            </div>
          </div>
          <div className={classes.DescriptionsBlock}>
            <h2>{project.title}</h2>
            {project.description}
            <h2>Lessons</h2>
            {project.lessons}
          </div>
          <div
            onClick={() =>
              showModalCb({
                isShown: true,
                content: [project.image, project.image, project.image],
              })
            }
            className={classes.ImageBlock}
          >
            <img
              className={classes.ProjectImage}
              src={project.image}
              alt={`${project.title} image`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
