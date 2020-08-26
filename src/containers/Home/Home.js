import React from 'react'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Courses from '../Courses/Courses'
import FadeInSection from '../FadeInSection/FadeInSection'
import WelcomeElements from '../../components/WelcomeElements/WelcomeElements'

const Home = props => {
  return (
    <>
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
        <Courses />
      </div>
    </>
  )
}

export default Home
