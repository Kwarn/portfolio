import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import Skills from '..//Skills/Skills'
import Courses from '../Courses/Courses'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'
import Modal from '../../components/UI/Modal/Modal'
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo'
import Slider from '../ProjectSlider/ProjectSlider'
import JumpToSectionArrow from '../../components/Navigation/JumpToSectionArrow/JumpToSectionArrow'

const Home = props => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  })

  const aboutMe = `As a technical and mechanical tinkerer from a young age, I've always been
  drawn to understanding how things work and finding logical solutions to
  problems. My curiosity has led me to understand a broad range of different
  technologies and I'd like to continue my journey inside a skilled team
  that I can learn from and grow with.`

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
        <div className={classes.AboutMe}>{aboutMe}</div>
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="dark"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('skills')}
          />
        </div>
      </div>
      <div ref={elementRefs.skills} className={classes.SkillsWrapper}>
        <Skills />
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('projects')}
          />
        </div>
      </div>
      <div ref={elementRefs.projects} className={classes.SliderWrapper}>
        <Slider showModal={modalContent => showModalHandler(modalContent)} />
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('courses')}
          />
        </div>
      </div>
      <div ref={elementRefs.courses} className={classes.CoursesWrapper}>
        <Courses showModal={modalContent => showModalHandler(modalContent)} />
        <div className={classes.JumpToSectionArrowWrapper}>
          <JumpToSectionArrow
            arrowColor="light"
            shouldFadeIn={false}
            scrollIntoViewFn={() => scrollIntoView('extraInfo')}
          />
        </div>
      </div>
      <div ref={elementRefs.extraInfo} className={classes.ExtraInfoWrapper}>
        <ExtraInfo elementRefs={elementRefs} />

        <button className={classes.ContactMe}>
          <Link to="/contact">
            Contact Me
          </Link>
        </button>
      </div>
    </>
  )
}

export default Home
