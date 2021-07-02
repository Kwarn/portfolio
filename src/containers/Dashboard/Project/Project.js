import React from 'react';
import imageAssets from '../../../assets/assets';
import classes from './Project.module.css';
import ImageSlider from '../../Slider/ImageSlider';

const Project = ({ project, showModalCb, closeModalCb }) => {
  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim());

  const techIcons = imageTags.map(tag =>
    imageAssets[tag] ? (
      <div>
        <img src={imageAssets[tag]} key={tag} alt={tag} />
      </div>
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

  return (
    <div className={`${classes.Project} ${classes.Font}`}>
      <div className={classes.BlocksWrapper}>
        <div className={classes.TechIconsBlock}>
          <div>{techIcons}</div>
        </div>
        <div className={classes.ExternalLinksBlock}>
          <div className={classes.ExternalLinksWrapper}>{externalLinks}</div>
        </div>
        <div className={classes.DescriptionsBlock}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h2>Lessons</h2>
          <p>{project.lessons}</p>
        </div>
        <div className={classes.TechnicalBlock}>
          <div className={classes.TechnicalMainContent}>
            <div className={classes.TechnicalHeader}>
              <h1>The Technical Stuff..</h1>
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
              content: [project.image, project.image, project.image],
            })
          }
        >
          <div className={classes.FadeEffect} />
          <h2 className={classes.ViewImages}>View images</h2>
          <ImageSlider images={[project.images]} />
        </div>
      </div>
    </div>
  );
};

export default Project;
