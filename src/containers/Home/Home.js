import React, { useState, useRef, Suspense } from 'react'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'
import Modal from '../../components/UI/Modal/Modal'
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo'
import JumpToSectionArrow from '../../components/Navigation/JumpToSectionArrow/JumpToSectionArrow'
import ObserveIntersection from '../../Hoc/ObserveIntersection/ObserveIntersection'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Home.module.css'

const Skills = React.lazy(() => import('../Skills/Skills'))
const ProjectSlider = React.lazy(() => import('../ProjectSlider/ProjectSlider'))
const Courses = React.lazy(() => import('../Courses/Courses'))
const Contact = React.lazy(() => import('../../containers/Contact/Contact'))

const Home = () => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  })

  const aboutMe = (
    <div className={classes.AboutMe}>
      As a technical and mechanical tinkerer from a young age, I've always been
      drawn to understanding how things work and pursuing solutions to problems.
      Curiosity has led me to understand a broad range of technologies and I'd
      like to continue my journey inside a skilled team that I can learn from
      and grow with.
    </div>
  )

  const showModalHandler = modalContent => {
    setModalControl({ modalContent: modalContent, isOpen: true })
  }

  const hideModalHandler = () => {
    setModalControl({ ...modalControl.modalContent, isOpen: false })
  }

  const elementRefs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    courses: useRef(null),
    extraInfo: useRef(null),
    contact: useRef(null),
  }

  const scrollIntoView = tag => {
    elementRefs[tag].current.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'smooth',
    })
  }

  const modal = (
    <Modal show={modalControl.isOpen} hide={() => hideModalHandler()}>
      {modalControl.modalContent}
    </Modal>
  )

  return (
    <>
      {modal}
      <div className={classes.WelcomeContainer}>
        <WelcomeElements />
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            scrollIntoViewFn={() => scrollIntoView('aboutMe')}
          />
        </div>
      </div>
      <div ref={elementRefs.aboutMe} className={classes.AboutMeWrapper}>
        {aboutMe}
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="dark"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('skills')}
          />
        </div>
      </div>
      <div ref={elementRefs.skills} className={classes.SkillsWrapper}>
        <ObserveIntersection targetRef={elementRefs.aboutMe}>
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
      <div ref={elementRefs.projects} className={classes.SliderWrapper}>
        <ObserveIntersection targetRef={elementRefs.skills}>
          <Suspense fallback={<Spinner />}>
            <ProjectSlider
              showModal={modalContent => showModalHandler(modalContent)}
            />
          </Suspense>
        </ObserveIntersection>
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('extraInfo')}
          />
        </div>
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
  )
}

export default Home
