import React, { useEffect, useState } from 'react';
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
import styled, { css, keyframes } from 'styled-components';

/************************ ANIMATIONS *************************/

const menuPointerAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const menuLinkClick = keyframes`
  0% {
  background-color: #474747;
  }
  100% {
    background-color: #c5c6c7;
  }
  `;

const StyledProfileLinksWrapper = styled.div`
  height: fit-content;
`;

const StyledDashBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
const StyledMenuWrapper = styled.div`
  z-index: 100;
  font-family: 'Teko';
  display: flex;
  margin: auto;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 200px;
  height: 100%;
  width: 15vw;
  background-color: #1f2833;
`;

const StyledMenuHeaderItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 0 auto;
  height: 300px;
  background-color: #0b0c10;
  box-sizing: border-box;
`;

const StyledMenuLinksContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #1f2833;
`;

const StyledMenuLink = styled.div`
  background-color: #1f2833;
  width: 100%;
  height: ${props => (props.isSmallMenuItem ? '2vh' : '4vh')};
  margin: ${props =>
    props.isSmallMenuItem ? '0.5vh auto 0.5vh auto' : '2vh auto 2vh auto'};
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const StyledMenuLinkTitle = styled.h2`
  background-color: #0b0c10;
  position: relative;
  width: 100%;
  animation: ${props =>
    props.isFocus
      ? css`
          ${menuLinkClick} 0.8s
        `
      : ''};
  background: ${props => (props.isFocus ? '#c5c6c7' : '#1f2833')};
  color: ${props => (props.isFocus ? '#474747' : '#c5c6c7')};
  margin: auto;
  font-size: 1.4em;
  bottom: 0;
  text-align: center;
`;

const StyledMenuPointer = styled.img`
  width: 30px;
  height: 180%;
  position: absolute;
  animation-name: ${menuPointerAnimation};
  animation-duration: 1s;
  right: -30px;
  top: calc(50% - 90%);
`;

/************************ MAIN CONTENT *************************/

const StyledMainContentWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
`;

const StyledMainContentContainer = styled.div`
  margin: auto;
  height: 100%;
  /* background: #0b0c10; */
  background-color: #c5c6c7;
  display: flex;
  justify-content: center;
`;

export default function Dashboard({ showModal }) {
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);

  const startLoad = () => setIsLoadingMenu(true);
  const stopLoad = () => setIsLoadingMenu(false);

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
    'Code Challenges': (
      <ExtraInfo showModal={content => setModalStatus(content)} />
    ),
  };

  const menuPointers = {
    light: (
      <StyledMenuPointer src={imageAssets.menuPointerLight} alt="menuPointer" />
    ),
    dark: (
      <StyledMenuPointer src={imageAssets.menuPointerDark} alt="menuPointer" />
    ),
  };

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
  const createMenuLink = (key, pointerColor, size = 'large') => {
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
          {activeContentIndex === index ? menuPointers[pointerColor] : null}
        </StyledMenuLinkTitle>
      </StyledMenuLink>
    );
  };

  const createElementsFromContentData = (key, pointerColor, MenuLinkSize) => {
    const MenuLink = createMenuLink(key, pointerColor, MenuLinkSize);
    const element = contentData[key];

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  };

  // begins creation and ordering of MenuLinks

  createElementsFromContentData('Welcome', 'dark', 'large');
  createElementsFromContentData('Skills', 'light', 'large');

  projectData.forEach(project => {
    const key = project.title;
    const element = createProjectElement(project);
    const MenuLink = createMenuLink(key, 'dark', 'small');

    MenuLinks.push(MenuLink);
    createContentControl(MenuLinks.length - 1, element);
  });

  createElementsFromContentData('Education', 'dark', 'large');
  createElementsFromContentData('Code Challenges', 'dark', 'large');

  return (
    <StyledDashBoardWrapper {...handlers}>
      <Modal
        isVisible={modalStatus.isShown && modalStatus.content}
        closeFn={() => closeModalHandler()}
      >
        {modalStatus.content}
      </Modal>
      <StyledMenuWrapper>
        <StyledMenuHeaderItems>
          <WelcomeElements
            isDrawOpen={activeContentIndex === 0}
            loadingFinishedHandler={stopLoad}
          />
          <StyledProfileLinksWrapper>
            <ProfileLinks />
          </StyledProfileLinksWrapper>
        </StyledMenuHeaderItems>
        <StyledMenuLinksContainer>{MenuLinks}</StyledMenuLinksContainer>
      </StyledMenuWrapper>

      <StyledMainContentWrapper>
        <StyledMainContentContainer>
          {contentController[activeContentIndex]}
        </StyledMainContentContainer>
      </StyledMainContentWrapper>
    </StyledDashBoardWrapper>
  );
}
