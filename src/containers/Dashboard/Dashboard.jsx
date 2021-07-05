import React, { useEffect, useState } from 'react';
import classes from './Dashboard.module.css';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './ProjectData';
import WelcomeElements from './WelcomeElements/WelcomeElements';
import Skills from '../Skills/Skills';
import imageAssets from '../../assets/assets';
import Courses from './Courses/Courses';
import { useSwipeable } from 'react-swipeable';
import AboutMe from './AboutMe/AboutMe';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import ProfileLinks from './ProfileLinks/ProfileLinks';

export default function Dashboard({ showModal }) {
  // ensures activeContentIndex is set to a valid index when scroll/swipe cycling through Menu.
  const incrementActiveIndexHandler = () => {
    setActiveContentIndex(prev => {
      if (prev === MenuLinks.length - 1) return 0;
      return prev + 1;
    });
  };
  const decrementActiveIndexHandler = () => {
    setActiveContentIndex(prev => {
      if (prev === 0) return MenuLinks.length - 1;
      return prev - 1;
    });
  };

  const scrollHandler = e => {
    // wheelDelta -> Chrome | deltaY -> Firefox.
    if (e.wheelDelta > 0 || e.deltaY < 0) decrementActiveIndexHandler();
    else incrementActiveIndexHandler();
  };

  // ************ LOGIC CONTROLS **********

  // {Index:Element}: Index is derived from element creation order.
  const contentController = {};

  // Int: used to access contentController
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Element Array
  const MenuLinks = [];

  // adds event listener to window which allows scrolling through menu items.
  useEffect(() => {
    window.addEventListener('wheel', e => scrollHandler(e));
    return window.removeEventListener('scroll', scrollHandler);
  }, [window]);

  // react-swipeable setup: allows swiping up and down to cycle through menu and main content.
  const config = { trackMouse: true, preventDefault: true };
  const handlers = useSwipeable({
    onSwipedDown: () => decrementActiveIndexHandler(),
    onSwipedUp: () => incrementActiveIndexHandler(),
    ...config,
  });

  // when isShown && content are true the modal is displayed.
  const [modalStatus, setModalStatus] = useState({
    isShown: false,
    content: null,
  });

  // resets isShown but preserves last content to improve repeat modal opening performance.
  const closeModalHandler = () => {
    setModalStatus({ isShown: false, content: { ...modalStatus.content } });
  };

  const contentData = {
    Welcome: <AboutMe />,
    Skills: <Skills />,
    Education: <Courses />,
    'Code Challenges': <ExtraInfo />,
  };

  const menuPointer = (
    <img
      src={imageAssets.menuPointer}
      alt="menuPointer"
      className={classes.MenuPointer}
    />
  );

  const ProjectsHeader = (
    <div key="Projects Header" className={classes.MenuSubHeader}>
      Projects
    </div>
  );

  // index:element used to display content using activeContentKey
  const createContentControl = (index, element) => {
    contentController[index] = element;
  };

  // returns JSX Main Content element
  const createProjectElement = project => {
    return (
      <div key={project.title}>
        <Project
          project={project}
          showModalCb={content => setModalStatus(content)}
          closeModalCb={closeModalHandler}
        />
      </div>
    );
  };

  // returns JSX MenuLink element with correct css Class
  const createMenuLink = (key, cssPrefix = '') => {
    const cssClass = `${cssPrefix}MenuLink`;
    const index = MenuLinks.length || 0;
    return (
      <div
        key={key}
        onClick={() => {
          setActiveContentIndex(index);
        }}
        className={`${classes[cssClass]} ${
          activeContentIndex === index ? classes.Focus : ''
        }`}
      >
        <h2 className={classes.MenuItemTitle}>{key}</h2>
        {activeContentIndex === index ? menuPointer : null}
      </div>
    );
  };

  const createElementsFromContentData = key => {
    const MenuLink = createMenuLink(key);
    const element = contentData[key];

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  };

  // begins creation and ordering of MenuLinks

  createElementsFromContentData('Welcome');
  createElementsFromContentData('Skills');

  projectData.forEach(project => {
    const key = project.title;
    const element = createProjectElement(project);
    const MenuLink = createMenuLink(key, 'Small');

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  });

  createElementsFromContentData('Education');
  createElementsFromContentData('Code Challenges');

  return (
    <div className={classes.DashboardWrapper} {...handlers}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <div className={`${classes.MenuWrapper} ${classes.Font}`}>
        <div className={classes.MenuHeaderItems}>
          <WelcomeElements />
          <ProfileLinks />
        </div>
        <div className={classes.MenuLinkContainer}>{MenuLinks}</div>
      </div>

      <div className={classes.MainContentWrapper}>
        <div className={classes.MainContentContainer}>
          {contentController[activeContentIndex]}
        </div>
      </div>
    </div>
  );
}
