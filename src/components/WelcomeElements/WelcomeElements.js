import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './WelcomeElements.module.css'

const WelcomeElements = props => {
  return (
    <div className={classes.WelcomeElements}>
      <div className={classes.Title}>
        <img
          className={classes.ProfileImage}
          src={imageAssets.profileImage}
          alt="profileImage"
        />
        <div className={classes.TitleElementsGroup}>
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
  )
}

export default WelcomeElements
