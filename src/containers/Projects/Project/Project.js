import React from 'react';
import DrawToggle from '../../DrawToggle/DrawControl';
import imageAssets from '../../../assets/assets';
import classes from './Project.module.css';

const Project = ({ project, showModalCb, closeModalCb }) => {
  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim());

  const images = imageTags.map(tag =>
    imageAssets[tag] ? (
      <img
        className={classes.TechIconImage}
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

  const projectImage = project.image ? (
    <img src={project.image} alt="projectImage" />
  ) : null;

  const projectImageMagGlass = project.image ? (
    <img src={imageAssets.magnifyingGlass} alt="click to view" />
  ) : null;

  const technicalPractices = project.technicalPractices
    .split(', ')
    .map(practice => (
      <li className={classes.ListItem} key={practice}>
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
    <div className={classes.ProjectWrapper}>
      <div className={classes.ProjectLinksWrapper}>
        <div className={classes.ProjectLinks}>Project links</div>
      </div>
      <div className={`${classes.Project}`}>
        <div className={classes.ProjectBlock}>Info</div>
        <div className={classes.ProjectBlock}>Info</div>
        <div className={classes.ProjectBlock}>Info</div>
        {/* <div className={classes.IconsBar}>
          <div className={classes.TechImagesWrapper}>{images}</div>
          {externalLinks}
        </div>
        <div className={classes.MainContentWrapper}>
          <DrawToggle
            iconLocation="bottom"
            iconOnly={false}
            icon="click"
            shouldAnimate={false}
            drawContent={
              <div>
                <h3>Technical practices</h3>
                <ul className={classes.LearnedList}>{technicalPractices}</ul>
              </div>
            }
          />
          <div className={classes.MainContent}>
            {pLinks.length > 0 ? (
              <div className={classes.projectLinks}>
                <h3>Git-Repo Links</h3>
                {pLinks}
              </div>
            ) : null}
            <div
              className={classes.ProjectImageWrapper}
              onClick={() =>
                showModalCb({
                  isShown: true,
                  content: [
                    project.image,
                    imageAssets.codeCademy,
                    imageAssets.burgerBuilder,
                  ],
                })
              }
            >
              {projectImage}
              {projectImageMagGlass}
            </div>

            <div className={classes.Desc}></div>
            <p>{project.description}</p>

            <h3>Key lessons</h3>
            <p className={classes.Desc}>{project.whatILearned}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
