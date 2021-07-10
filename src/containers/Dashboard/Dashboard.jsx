import React, { useContext, useEffect, useState } from 'react';
import Project from './Project/Project';
import Modal from '../../components/UI/Modal/Modal';
import projectData from './Project/ProjectData';
import WelcomeElements from './WelcomeElements/WelcomeElements';
import Skills from './Skills/Skills';
import Courses from './Courses/Courses';
import { useSwipeable } from 'react-swipeable';
import AboutMe from './AboutMe/AboutMe';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import ProfileLinks from './ProfileLinks/ProfileLinks';
import styled, { css, keyframes } from 'styled-components';
import LayoutsContext from '../../Layout/LayoutsContext';
import Contact from './Contact/Contact';
import imageAssets from '../../assets/assets';

/************************     MENU     *************************/

const StyledDashBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMenuWrapper = styled.div`
  position: ${props => (props.isDesktop ? 'relative' : 'absolute')};
  display: flex;
  flex-direction: column;
  margin: auto;
  z-index: 100;
  min-height: 100vh;
  max-height: 100vh;
  height: 100%;
  font-family: 'Teko';
  background-color: #1f2833;
  border-right: 4px solid #0b0c10;
  transition: ${props => (props.isMenuOpen ? 'width 0.8s' : 'width 0.5s')};
  width: ${props =>
    props.isMenuOpen ? (props.isMobile ? '50vw' : '300px') : '5vw'};
  cursor: ${props => (props.isMenuOpen ? 'arrow' : 'pointer')};
`;

const StyledBurgerIcon = styled.div`
  position: absolute;
  height: 40px;
  width: 3vw;
  color: #c5c6c7;
  right: calc(50% - 1.5vw);
  top: calc(50% - 20px);
  div {
    min-height: 5px;
    min-width: 100%;
    border-bottom: 4px solid #c5c6c7;
    margin-top: 5px;
  }
`;

const StyledProfileLinksWrapper = styled.div`
  margin: 30vh auto auto auto;
  height: fit-content;
  width: 100%;
  transition: ${props => (props.isMenuOpen ? 'opacity 2s' : 'opacity 0.2s')};
  opacity: ${props => (props.isMenuOpen ? '1' : '0')};
`;

const StyledMenuLinksContainer = styled.div`
  transition: ${props => (props.isMenuOpen ? 'opacity 2s' : 'opacity 0.2s')};
  opacity: ${props => (props.isMenuOpen ? '1' : '0')};
  width: 100%;
  height: 100%;
  margin: 5vh auto 5vh auto;
  display: flex;
  flex-direction: column;
  background-color: #1f2833;
`;

const StyledMenuLink = styled.div`
  background-color: #1f2833;
  width: 100%;
  height: ${props => (props.isSmallMenuItem ? '2vh' : '4vh')};
  margin: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledMenuLinkTitle = styled.h2`
  position: relative;
  white-space: nowrap;
  background-color: #0b0c10;
  width: 100%;
  background: ${props => (props.isFocus ? '#c5c6c7' : '#1f2833')};
  color: ${props => (props.isFocus ? '#474747' : '#c5c6c7')};
  margin: auto;
  font-size: 1.4em;
  bottom: 0;
  text-align: center;
`;

/************************ MAIN CONTENT *************************/

const StyledMainContentWrapper = styled.div`
  margin: ${props => (props.isDesktop ? 'auto' : 'auto auto auto 5vw')};
  /* margin: auto; */
  width: 100%;
  height: 100vh;
`;

const StyledMainContentContainer = styled.div`
  margin: auto;
  height: 100%;
  background-color: #c5c6c7;
  display: flex;
  justify-content: center;
`;

export default function Dashboard() {
  const layouts = useContext(LayoutsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(layouts.isDesktop);

  // ensures activeContentIndex is set to a valid index when scroll/swipe cycling through Menu.
  const incrementActiveIndexHandler = () => {
    setActiveContentIndex(currentIndex => {
      if (currentIndex === MenuLinks.length - 1) return 0;
      return currentIndex + 1;
    });
  };
  const decrementActiveIndexHandler = () => {
    setActiveContentIndex(currentIndex => {
      if (currentIndex === 0) return MenuLinks.length - 1;
      return currentIndex - 1;
    });
  };

  const scrollHandler = e => {
    // wheelDelta -> Chrome | deltaY -> Firefox.
    if (e.wheelDelta > 0 || e.deltaY < 0) decrementActiveIndexHandler();
    else incrementActiveIndexHandler();
  };

  // ************ LOGIC CONTROLS **********

  // {Int:Element}: Key index is derived from element creation order.
  const contentController = {};

  // Int: used to access contentController
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Menu Link Element Array
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
    onSwipedLeft: () => setIsMenuOpen(false),
    onSwipedRight: () => setIsMenuOpen(true),
    ...config,
  });

  // when isShown && content are true the modal is displayed.
  const [modalStatus, setModalStatus] = useState({
    isShown: false,
    content: null,
  });

  // resets isShown but preserves last content to improve repeat modal opening performance.
  const closeModalHandler = () => {
    setModalStatus(prevState => {
      return { isShown: false, content: { ...prevState.content } };
    });
  };

  const menuHoverHandler = () => {
    if (layouts.isDesktop) {
      setIsMenuOpen(true);
    }
  };

  const closeMenuHander = () => {
    if (!layouts.isDesktop) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenuHandler = () => {
    if (!layouts.isDesktop) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // keys are MenuItem titles, values are MainContentElements.
  const contentData = {
    Welcome: <AboutMe />,
    Skills: <Skills />,
    Education: <Courses />,
    'Code Challenges': (
      <ExtraInfo showModal={content => setModalStatus(content)} />
    ),
    Contact: <Contact />,
  };

  // index:element used to display content using activeContentKey.
  const createContentControl = (index, element) => {
    contentController[index] = element;
  };

  // returns JSX Main Content element.
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
  const createMenuLink = (key, size = 'large') => {
    const index = MenuLinks.length || 0;
    return (
      <StyledMenuLink
        isSmallMenuItem={size === 'small'}
        isFocus={activeContentIndex === index}
        key={key}
        onClick={() => {
          setActiveContentIndex(index);
        }}
      >
        <StyledMenuLinkTitle isFocus={activeContentIndex === index}>
          {key}
        </StyledMenuLinkTitle>
      </StyledMenuLink>
    );
  };

  const createElementsFromContentData = (key, MenuLinkSize) => {
    const MenuLink = createMenuLink(key, MenuLinkSize);
    const element = contentData[key];

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  };

  // begins creation and ordering of MenuLinks.

  createElementsFromContentData('Welcome', 'large');
  createElementsFromContentData('Skills', 'large');

  projectData.forEach(project => {
    const key = project.title;
    const element = createProjectElement(project);
    const MenuLink = createMenuLink(key, 'small');

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  });

  createElementsFromContentData('Education', 'large');
  createElementsFromContentData('Code Challenges', 'large');
  createElementsFromContentData('Contact', 'large');

  const burgerIcon = isMenuOpen ? (
    ''
  ) : (
    <StyledBurgerIcon>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurgerIcon>
  );

  return (
    <StyledDashBoardWrapper {...handlers}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <StyledMenuWrapper
        {...layouts}
        isMenuOpen={isMenuOpen}
        onMouseEnter={() => menuHoverHandler()}
        onClick={() => toggleMenuHandler(!isMenuOpen)}
      >
        <WelcomeElements
          isMenuOpen={isMenuOpen}
          isWelcomePage={activeContentIndex === 0}
        />
        <StyledProfileLinksWrapper isMenuOpen={isMenuOpen}>
          <ProfileLinks />
        </StyledProfileLinksWrapper>
        {burgerIcon}
        <StyledMenuLinksContainer isMenuOpen={isMenuOpen}>
          {MenuLinks}
        </StyledMenuLinksContainer>
      </StyledMenuWrapper>
      <StyledMainContentWrapper {...layouts} onClick={() => closeMenuHander()}>
        <StyledMainContentContainer>
          {contentController[activeContentIndex]}
        </StyledMainContentContainer>
      </StyledMainContentWrapper>
    </StyledDashBoardWrapper>
  );
}
