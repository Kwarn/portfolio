import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import Skills from '../../components/Skills/Skills'
import Courses from '../Courses/Courses'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'
import Modal from '../../components/Modal/Modal'
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo'
import Slider from '../Slider/Slider'

const Home = props => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  })
  const [selectedContent, setSelectedContent] = useState('')

  const [
    aboutMe,
  ] = useState(`As a technical and mechanical tinkerer from a young age, I've always been
  drawn to understanding how things work and finding logical solutions to
  problems. My curiosity has led me to understand a broad range of different
  technologies and I'd like to continue my journey inside a skilled team
  that I can learn from and grow with.`)

  const selectedContentHandler = selectedContentTag => {
    if (selectedContentTag === selectedContent) setSelectedContent('')
    else setSelectedContent(selectedContentTag)
  }

  const showModalHandler = modalContent => {
    setModalControl({ modalContent: modalContent, isOpen: true })
  }

  const hideModalHandler = () => {
    setModalControl({ ...modalControl.modalContent, isOpen: false })
  }

  const elementRefs = {
    skills: useRef(null),
    projects: useRef(null),
    courses: useRef(null),
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
      <div className={classes.Home}>
        <div className={classes.WelcomeContainer}>
          <WelcomeElements
            scrollIntoView={tag => scrollIntoView(tag)}
            aboutMe={aboutMe}
          />
        </div>
        <p className={classes.SmallDisplaysAboutMe}>{aboutMe}</p>
      </div>
      <div className={classes.SkillsWrapper}>
        <Skills
          elementRef={elementRefs.skills}
          selectedContentTag={selectedContent}
          selectedContentHandler={tag => selectedContentHandler(tag)}
        />
      </div>
      <div className={classes.SliderWrapper}>
        <Slider
          showModal={modalContent => showModalHandler(modalContent)}
          elementRef={elementRefs.projects}
          selectedContentTag={selectedContent}
        />
      </div>
      <div className={classes.CoursesWrapper}>
        <Courses
          elementRef={elementRefs.courses}
          selectedContentTag={selectedContent}
          showModal={modalContent => showModalHandler(modalContent)}
        />
      </div>
      {/* <ExtraInfo
        elementRefs={elementRefs}
        selectedContentTag={selectedContent}
      /> */}
    </>
  )
}

export default Home
