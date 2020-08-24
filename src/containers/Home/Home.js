import React from 'react'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Courses from '../Courses/Courses'

const Home = props => {
  return (
    <>
      <div className={classes.Home}>
        <div className={classes.Title}>
          <img
            className={classes.ProfileImage}
            src={imageAssets.profileImage}
            alt="profileImage"
          />
          <h1>Karl Warner</h1>
          <p>{`</> Software Developer`}</p>
          <div className={classes.LinkIcons}>
            <a
              href="https://github.com/Kwarn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageAssets.gitHub} alt="gitHubIcon"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/karl-warner-9147661b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageAssets.linkedIn} alt="linkedInIcon"></img>
            </a>
          </div>
        </div>
        <p className={classes.Footer}>
          Website built and designed with react/css modules
        </p>
      </div>
      <Skills />
      <Projects />
      <Courses />
    </>
  )
}

export default Home
