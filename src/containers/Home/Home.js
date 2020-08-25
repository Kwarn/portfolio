import React from 'react'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'
import Skills from '../../components/Skills/Skills'
import Projects from '../Projects/Projects'
import Courses from '../Courses/Courses'
import FadeInSection from '../FadeInSection/FadeInSection'

const Home = props => {
  return (
    <>
      <div className={classes.Home}>
        <img
          className={classes.WelcomeImage}
          src={imageAssets.appBackground}
          alt="welcomeImage"
        />
        <div className={classes.WelcomeElements}>
          <div className={classes.Title}>
            <img
              className={classes.ProfileImage}
              src={imageAssets.profileImage}
              alt="profileImage"
            />
            <div className={classes.WelcomeTop}>
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
          </div>
          <div className={classes.Divider}></div>
          <p className={classes.AboutMe}>
            As a technical and mechanical tinkerer from a young age, I've always
            been drawn to understanding how things work and finding logical
            solutions to problems. My curiosity has led me to understand a broad
            range of different technologies and I'd like to continue my journey
            inside a skilled team that I can learn from and grow with.
          </p>
        </div>
        <FadeInSection fadeDirection="top">
          <img
            className={classes.OpenDrawIcon}
            src={imageAssets.openDraw}
            alt="openDrawIcon"
          />
        </FadeInSection>
      </div>
      <div className={classes.ComponentsWrapper}>
        <FadeInSection fadeDirection="right">
          <Skills />
        </FadeInSection>

        <FadeInSection fadeDirection="top">
          <Projects />
        </FadeInSection>

        <FadeInSection fadeDirection="left">
          <Courses />
        </FadeInSection>
      </div>
    </>
  )
}

export default Home
