import React from 'react'
import imageAssets from '../../assets/assets'
import FadeInSection from '../../containers/FadeInSection/FadeInSection'
import classes from './WelcomeElements.module.css'

const WelcomeElements = ({ scrollIntoView }) => {
  return (
    <>
      <div className={classes.WelcomeElements}>
        <div className={classes.TitleGroup}>
          <img
            className={classes.ProfileImage}
            src={imageAssets.profileImage}
            alt="profileImage"
          />
          <div>
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
                <img
                  src={imageAssets.linkedInCharcoal}
                  alt="linkedInIcon"
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* <button onClick={() => scrollIntoView('skills')}>Skills</button>
        <button onClick={() => scrollIntoView('projects')}>Projects</button> */}

        <FadeInSection fadeDirection="bottom">
          <img
            className={classes.ScrollDownArrow}
            src={imageAssets.downArrow}
            alt="openDrawIcon"
            onClick={() => scrollIntoView('aboutMe')}
          />
        </FadeInSection>
      </div>
    </>
  )
}

export default WelcomeElements
