import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Courses from '../Courses/Courses'
import FadeInSection from '../FadeInSection/FadeInSection'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'
import Modal from '../../components/Modal/Modal'

const Home = props => {
  const [modalControl, setModalControl] = useState({
    isOpen: false,
    modalContent: null,
  })

  const showModalHandler = modalContent => {
    setModalControl({ modalContent: modalContent, isOpen: true })
  }

  const closeModalHandler = () => {
    setModalControl({ ...modalControl.modalContent, isOpen: false })
  }

  const modal = (
    <Modal show={modalControl.isOpen} close={() => closeModalHandler()}>
      {modalControl.modalContent}
    </Modal>
  )

  return (
    <>
      {modal}
      <div className={classes.Home}>
        <WelcomeElements />
        <FadeInSection fadeDirection="top">
          <img
            className={classes.OpenDrawIcon}
            src={imageAssets.blackDownArrow}
            alt="openDrawIcon"
          />
        </FadeInSection>
      </div>
      <div className={classes.ComponentsWrapper}>
        <Skills />
        <Projects />
        <Courses showModal={modalContent => showModalHandler(modalContent)} />
      </div>
      <Link to="/contact">
        <div>
          <button className={classes.ContactButton}>Contact</button>
        </div>
      </Link>
    </>
  )
}

export default Home
