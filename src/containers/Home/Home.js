import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Courses from '../Courses/Courses'
import FadeInSection from '../FadeInSection/FadeInSection'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'
import Modal from '../../components/Modal/Modal'
import ExtraInfo from '../../components/ExtraInfo/ExtraInfo'

const Home = props => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  })
  const [selectedContent, setSelectedContent] = useState('')

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

  const firstElementRefs = {
    skills: useRef(null),
    javascript: useRef(null),
    python: useRef(null),
    general: useRef(null),
    environment: useRef(null),
  }

  const scrollIntoView = tag => {
    firstElementRefs[tag].current.scrollIntoView({
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
          <WelcomeElements />
          <FadeInSection fadeDirection="top">
            <img
              className={classes.ScrollDownArrow}
              src={imageAssets.downArrow}
              alt="openDrawIcon"
              onClick={() => scrollIntoView('skills')}
            />
          </FadeInSection>
        </div>
      </div>
      <div className={classes.ComponentsWrapper}>
        <Skills
          scrollToRef={firstElementRefs.skills}
          scrollIntoView={tag => scrollIntoView(tag)}
          selectedContentTag={selectedContent}
          selectedContentHandler={tag => selectedContentHandler(tag)}
        />
        <Projects
          firstElementRefs={firstElementRefs}
          scrollIntoView={tag => scrollIntoView(tag)}
          selectedContentTag={selectedContent}
          showModal={modalContent => showModalHandler(modalContent)}
        />
        <Courses
          firstElementRefs={firstElementRefs}
          selectedContentTag={selectedContent}
          showModal={modalContent => showModalHandler(modalContent)}
        />
      </div>
      <ExtraInfo
        firstElementRefs={firstElementRefs}
        selectedContentTag={selectedContent}
      />
      <Link to="/contact">
        <div>
          <button className={classes.ContactButton}>Contact</button>
        </div>
      </Link>
    </>
  )
}

export default Home
