import React, { useState, useEffect, useRef, Suspense } from 'react';
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements';
import Modal from '../../components/UI/Modal/Modal';
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo';
import JumpToSectionArrow from '../../components/Navigation/JumpToSectionArrow/JumpToSectionArrow';
import ObserveIntersection from '../../Hoc/ObserveIntersection/ObserveIntersection';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Home.module.css';
import Projects from '../Projects/Projects';

const Skills = React.lazy(() => import('../Skills/Skills'));

const Courses = React.lazy(() => import('../Courses/Courses'));
const Contact = React.lazy(() => import('../../containers/Contact/Contact'));

const Home = () => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () =>
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  const showModalHandler = modalContent => {
    setModalControl({ modalContent: modalContent, isOpen: true });
  };

  const hideModalHandler = () => {
    setModalControl({ ...modalControl.modalContent, isOpen: false });
  };

  const elementRefs = {
    skills: useRef(null),
    projects: useRef(null),
    courses: useRef(null),
    extraInfo: useRef(null),
    contact: useRef(null),
  };

  const scrollIntoView = tag => {
    elementRefs[tag].current.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'smooth',
    });
  };

  const modal = (
    <Modal show={modalControl.isOpen} hide={() => hideModalHandler()}>
      {modalControl.modalContent}
    </Modal>
  );

  return (
    <>
      {modal}
      <div className={classes.WelcomeContainer}>
        <WelcomeElements />
        <div className={classes.AboutMeWrapper}>
          <div className={classes.AboutMe}>
            <h2 className={classes.AboutMeTitle}>{`<AboutMe />`}</h2>
            <p>
              A devout learner experienced in Full-stack development with a
              focus on front-end systems, utilizing popular modern frameworks &
              libraries whilst practising the latest generation of architecture
              and design principles to create responsive, scaleable, and
              initiative web solutions.
            </p>
            <div className={classes.JumpToSectionArrowWrapper}>
              <JumpToSectionArrow
                arrowColor={windowDimensions.width < 1024 ? 'light' : 'dark'}
                scrollIntoViewFn={() => scrollIntoView('skills')}
                shouldFadeIn={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={elementRefs.skills} className={classes.SkillsWrapper}>
        <ObserveIntersection targetRef={elementRefs.skills}>
          <Suspense fallback={<Spinner />}>
            <Skills />
          </Suspense>
        </ObserveIntersection>
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('projects')}
          />
        </div>
      </div>
      <div ref={elementRefs.projects} className={classes.ProjectsWrapper}>
        <ObserveIntersection targetRef={elementRefs.projects}>
          <Suspense fallback={<Spinner />}>
            <Projects
              showModal={modalContent => showModalHandler(modalContent)}
            />
          </Suspense>
        </ObserveIntersection>
        {/* <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="dark"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('extraInfo')}
          />
        </div> */}
      </div>
      <div ref={elementRefs.extraInfo} className={classes.ExtraInfoWrapper}>
        <ObserveIntersection targetRef={elementRefs.projects}>
          <Suspense fallback={<Spinner />}>
            <ExtraInfo
              showModal={modalContent => showModalHandler(modalContent)}
            />
          </Suspense>
        </ObserveIntersection>
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="dark"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('courses')}
          />
        </div>
      </div>
      <div ref={elementRefs.courses} className={classes.CoursesWrapper}>
        <ObserveIntersection targetRef={elementRefs.extraInfo}>
          <Suspense fallback={<Spinner />}>
            <Courses
              showModal={modalContent => showModalHandler(modalContent)}
            />
          </Suspense>
        </ObserveIntersection>

        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('contact')}
          />
        </div>
      </div>
      <div className={classes.ContactWrapper} ref={elementRefs.contact}>
        <ObserveIntersection targetRef={elementRefs.courses}>
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        </ObserveIntersection>
      </div>
    </>
  );
};

export default Home;
