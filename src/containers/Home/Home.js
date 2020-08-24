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
        <p className={classes.AboutMe}>
          A tech person from a young age, I'm dedicated to improving myself and
          everything I'm involved in. I love understanding how things work and
          never shy away from finding a solution. I'm able to work with minimal
          guidance when required and I strive to work and communicate
          effectively as part of a team.
        </p>
      </div>
      <Skills />
      <Projects />
      <Courses />
    </>
  )
}

export default Home
