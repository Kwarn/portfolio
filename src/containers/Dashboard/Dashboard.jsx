import React, { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './ProjectData';
import WebFont from 'webfontloader';
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements';
import Skills from '../Skills/Skills';

export default function Dashboard({ showModal }) {
  // when isShown && content are true the modal is displayed.
  const [modalStatus, setModalStatus] = useState({
    isShown: false,
    content: null,
  });
  // resets isShown but preserves last content to improve repeat performance.
  const closeModalHandler = () => {
    setModalStatus({ isShown: false, content: { ...modalStatus.content } });
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Teko'],
      },
    });
  }, []);

  const [activeContentKey, setActiveContentKey] = useState('Welcome');

  const MenuItems = [
    <div key="menuHeader" className={classes.MenuHeader}>
      Menu
    </div>,
  ];

  const mainContentSelectors = {};

  const menuItemData = { Welcome: <WelcomeElements />, Skills: <Skills /> };

  for (const menuItem in menuItemData) {
    MenuItems.push(
      <div
        key={menuItem}
        onClick={() => setActiveContentKey(menuItem)}
        className={`${classes.DashboardMenuItem} ${
          activeContentKey === menuItem ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{menuItem}</h2>
      </div>
    );
    mainContentSelectors[menuItem] = menuItemData[menuItem];
  }

  MenuItems.push(
    <div key="Projects Header" className={classes.MenuHeader}>
      Projects
    </div>
  );

  projectData.forEach(p => {
    MenuItems.push(
      <div
        key={p.title}
        onClick={() => setActiveContentKey(p.title)}
        className={`${classes.SubMenuItem} ${
          activeContentKey === p.title ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{p.title}</h2>
      </div>
    );

    mainContentSelectors[p.title] = (
      <div key={p.title} className={classes.FullProject}>
        <Project
          project={p}
          showModalCb={content => setModalStatus(content)}
          closeModalCb={closeModalHandler}
        />
      </div>
    );
  });

  // stores a project.title (String) which is used as a key to access and display FullProjects.

  // creates and pushes projectMenuItem Elements to array,
  // creates FullProject elements, maps them by title to properties in mainContentSelectors (object)

  return (
    <div className={classes.DashboardWrapper}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <div className={`${classes.DashboardMenuItemsWrapper} ${classes.Font}`}>
        <div className={classes.DashboardMenuItemsContainer}>{MenuItems}</div>
      </div>

      <div className={classes.MainContentWrapper}>
        <div className={classes.MainContentContainer}>
          {mainContentSelectors[activeContentKey]}
        </div>
      </div>
    </div>
  );
}
