import React, { useContext } from 'react';
import imageAssets from '../../../../assets/assets';
import classes from './Project.module.css';

const Project = ({ project, showModalCb, closeModalCb, backToProjectsCb }) => {
  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim());

  const techIcons = imageTags.map(tag =>
    imageAssets[tag] ? <img key={tag} src={imageAssets[tag]} alt={tag} /> : null
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
          GitHub-Repo
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

  return (
    <div className={`${classes.Project} ${classes.Font}`}>
      <div className={`${classes.BlocksWrapper}`}>
        <div className={classes.BackArrowBlock}>
          <img
            onClick={backToProjectsCb}
            src={imageAssets.upArrow}
            alt="backToProjectsArrow"
          />
        </div>
        <div className={classes.TechIconsBlock}>
          <div>{techIcons}</div>
        </div>
        <div className={classes.ExternalLinksBlock}>
          <h1>{project.title}</h1>
          <div className={classes.ExternalLinksWrapper}>{externalLinks}</div>
        </div>
        <div className={classes.DescriptionsBlock}>
          <div>
            <h2>Description</h2>
            <p>{project.description}</p>
            <p>{project.lessons}</p>
          </div>
        </div>
        <div className={classes.TechnicalBlock}>
          <div className={classes.TechnicalMainContent}>
            <div className={classes.TechnicalHeader}>
              <h2>The Technical Stuff..</h2>
            </div>
            <ul className={classes.TechnicalPracticesList}>
              {technicalPractices}
            </ul>
          </div>
        </div>
        <div
          className={classes.ImageBlock}
          onClick={() =>
            showModalCb({
              isShown: true,
              content: project.images,
            })
          }
        >
          <div className={classes.FadeEffect} />
          <h2 className={classes.ViewImages}>View images</h2>
          <img src={project.images[0]} alt="project" />
        </div>
      </div>
    </div>
  );
};

export default Project;
