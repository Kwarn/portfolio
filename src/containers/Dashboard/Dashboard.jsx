import React, { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './ProjectData';
import FileSaver from 'file-saver';
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements';
import Skills from '../Skills/Skills';
import imageAssets from '../../assets/assets';
import Courses from '../Courses/Courses';
import { useSwipeable } from 'react-swipeable';

/*







 TO DO:
 
 make menu scrollable

 complete index-key mapping for use in accessing menu items/main content
















*/

export default function Dashboard({ showModal }) {
  const incrementActiveIndexHandler = () => {
    setActiveContentIndex(prev => {
      if (prev === currentIndex - 1) return 0;
      return prev + 1;
    });
  };
  const decrementActiveIndexHandler = () => {
    setActiveContentIndex(prev => {
      if (prev === 0) return currentIndex - 1;
      return prev - 1;
    });
  };

  const scrollHandler = e => {
    if (e.wheelDelta > 0) decrementActiveIndexHandler();
    else incrementActiveIndexHandler();
  };

  useEffect(() => {
    window.addEventListener('wheel', e => scrollHandler(e));
    return window.removeEventListener('scroll', scrollHandler);
  }, [window]);

  // allows swiping up and down to cycle through menu and main content.
  const config = { trackMouse: true, preventDefault: true };
  const handlers = useSwipeable({
    onSwipedDown: eventData => decrementActiveIndexHandler(),
    onSwipedUp: eventData => incrementActiveIndexHandler(),
    ...config,
  });

  // when isShown && content are true the modal is displayed.
  const [modalStatus, setModalStatus] = useState({
    isShown: false,
    content: null,
  });

  // resets isShown but preserves last content to improve repeat performance.
  const closeModalHandler = () => {
    setModalStatus({ isShown: false, content: { ...modalStatus.content } });
  };

  // index of the currently selected Content used to access indexKeyMan
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // keys are Menu Item titles, accessed with activeContentKey contains MainContent elements.
  const mainContentSelectors = {};

  // creates index:menuitemkey
  const indexKeyMap = {};
  const createIndexKeyMap = (index, key) => {
    indexKeyMap[index] = key;
  };

  // key (String) is used to access mainContentSelectors which contains respective Elements.
  const [activeContentKey, setActiveContentKey] = useState(
    indexKeyMap[activeContentIndex]
  );

  // loads font on initial render.
  useEffect(() => {
    setActiveContentKey(indexKeyMap[activeContentIndex]);
  });

  // MenuItem (Element) are pushed and spliced to create correct Menu order.
  const MenuItems = [];

  // used to tightly group Project MenuItems -> Later spliced into MenuItems.
  const SubMenuItems = [];

  // tracks the order of element creation for use to map index to contentKeys.
  let currentIndex = 0;

  const menuPointer = (
    <img
      src={imageAssets.menuPointer}
      alt="menuPointer"
      className={classes.MenuPointer}
    />
  );

  const saveFile = () =>
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/resource/Karl_Warner_CV.pdf',
      'Karl_Warner_CV.pdf'
    );

  const ProfileLinks = (
    <div className={classes.ProfileLinks}>
      <a
        href="https://github.com/Kwarn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageAssets.gitHubLight} alt="gitHubIcon"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/karl-warner-9147661b5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageAssets.linkedInLight} alt="linkedInIcon"></img>
      </a>
      <div className={classes.DownloadCV} onClick={saveFile}>
        <img src={imageAssets.cvIcon} alt="download CV" />
      </div>
    </div>
  );

  MenuItems.push(ProfileLinks);

  const menuItemData = {
    Welcome: <WelcomeElements />,
    Skills: <Skills />,
    Education: <Courses />,
  };

  // creates MenuItems and maps MainContent Elements to their respective MenuItem titles.
  for (const menuItem in menuItemData) {
    const index = currentIndex;
    MenuItems.push(
      <div
        key={menuItem}
        onClick={() => {
          setActiveContentKey(menuItem);
          setActiveContentIndex(index);
        }}
        className={`${classes.MenuItem} ${
          activeContentKey === menuItem ? classes.Focus : ''
        }`}
      >
        {activeContentKey === menuItem ? menuPointer : null}
        <h2 className={classes.MenuItemTitle}>{menuItem}</h2>
      </div>
    );
    mainContentSelectors[menuItem] = menuItemData[menuItem];
    createIndexKeyMap(currentIndex, menuItem);
    currentIndex++;
  }

  projectData.forEach(p => {
    const index = currentIndex;
    SubMenuItems.push(
      <div
        key={p.title}
        onClick={() => {
          setActiveContentKey(p.title);
          setActiveContentIndex(index);
        }}
        className={`${classes.SubMenuItem} ${
          activeContentKey === p.title ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{p.title}</h2>
        {activeContentKey === p.title ? menuPointer : null}
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
    createIndexKeyMap(currentIndex, p.title);
    currentIndex++;
  });

  // places "Projects" header above project menu items
  MenuItems.splice(
    4,
    0,
    <div key="Projects Header" className={classes.MenuSubHeader}>
      Projects
    </div>
  );

  // SubMenuItems placed in their container and spliced into MenuItems after "Projects" header.
  MenuItems.splice(
    5,
    0,
    <div key="SubMenuItemsContainer" className={classes.SubMenuItemsContainer}>
      {SubMenuItems}
    </div>
  );

  return (
    <div className={classes.DashboardWrapper} {...handlers}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <div className={`${classes.MenuItemsWrapper} ${classes.Font}`}>
        <div className={classes.MenuItemsContainer}>{MenuItems}</div>
      </div>

      <div className={classes.MainContentWrapper}>
        <div className={classes.MainContentContainer}>
          {mainContentSelectors[activeContentKey]}
        </div>
      </div>
    </div>
  );
}
