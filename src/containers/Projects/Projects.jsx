import React, { useState } from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './ProjectData';

export default function Projects({ showModal }) {
  // stores a project.title (String) which is used as a key to access and display FullProjects.
  const [focusProject, setFocusProject] = useState(projectData[0].title);

  const switchProjectHandler = projectTitle => {
    setFocusProject(projectTitle);
  };

  // when isShown && content are true the modal is displayed.
  const [modalStatus, setModalStatus] = useState({
    isShown: false,
    content: null,
  });

  // resets isShown but preserves last content to improve repeat performance.
  const closeModalHandler = () => {
    setModalStatus({ isShown: false, content: { ...modalStatus.content } });
  };

  // used to contain an array of projectMenuItem Elements
  const projectMenuItems = [];
  const fullProjects = {};

  // creates and pushes projectMenuItem Elements to array,
  // creates FullProject elements, maps them by title to properties in fullProjects (object)
  projectData.forEach(p => {
    projectMenuItems.push(
      <div
        key={p.title}
        onClick={() => switchProjectHandler(p.title)}
        className={`${classes.ProjectMenuItem} ${
          focusProject === p.title ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{p.title}</h2>
      </div>
    );
    fullProjects[p.title] = (
      <div className={classes.FullProject}>
        <Project
          project={p}
          showModalCb={content => setModalStatus(content)}
          closeModalCb={closeModalHandler}
        />
      </div>
    );
  });

  return (
    <div className={classes.ProjectsWrapper}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <div className={classes.ProjectMenuItemsWrapper}>
        <h2 className={classes.MenuTitle}>Menu</h2>
        <div className={classes.ProjectMenuItemsContainer}>
          {projectMenuItems}
        </div>
      </div>

      <div className={classes.FullProjectWrapper}>
        <div className={classes.FullProjectContainer}>
          {fullProjects[focusProject]}
        </div>
      </div>
    </div>
  );
}
