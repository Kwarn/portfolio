import React, { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './ProjectData';
import WebFont from 'webfontloader';
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements';

export default function Dashboard({ showModal }) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Teko'],
      },
    });
  }, []);

  // stores a project.title (String) which is used as a key to access and display FullProjects.
  const [mainContent, setMainContent] = useState(projectData[0].title);

  const switchMainContentHandler = projectTitle => {
    setMainContent(projectTitle);
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

  const MenuIemData = { Welcome: WelcomeElements };

  // used to contain an array of projectMenuItem Elements
  const MenuItems = [<div className={classes.MenuHeader}>Menu</div>];
  const mainContentMap = {};

  for (const menuItem in MenuIemData) {
    MenuItems.push(
      <div
        key={menuItem}
        onClick={() => switchMainContentHandler(menuItem)}
        className={`${classes.DashboardMenuItem} ${
          mainContent === menuItem ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{menuItem}</h2>
      </div>
    );
  }

  // creates and pushes projectMenuItem Elements to array,
  // creates FullProject elements, maps them by title to properties in mainContentMap (object)
  projectData.forEach(p => {
    MenuItems.push(
      <div
        key={p.title}
        onClick={() => switchMainContentHandler(p.title)}
        className={`${classes.DashboardMenuItem} ${
          mainContent === p.title ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{p.title}</h2>
      </div>
    );
    mainContentMap[p.title] = (
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
    <div className={classes.DashboardWrapper}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <div className={`${classes.DashboardMenuItemsWrapper} ${classes.Font}`}>
        {/* <h2 className={classes.MenuTitle}>Menu</h2> */}
        <div className={classes.DashboardMenuItemsContainer}>{MenuItems}</div>
      </div>

      <div className={classes.MainContentWrapper}>
        <div className={classes.MainContentContainer}>
          {mainContentMap[mainContent]}
        </div>
      </div>
    </div>
  );
}
