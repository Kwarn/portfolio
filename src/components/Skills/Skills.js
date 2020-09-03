import React from 'react'
import classes from './Skills.module.css'
import imageAssets from '../../assets/assets'

const Skills = ({
  scrollToRef,
  selectedContentHandler,
  selectedContentTag,
  scrollIntoView,
}) => {
  const onClickHandler = tag => {
    selectedContentHandler(tag)
    scrollIntoView(tag)
  }

  return (
    <div className={classes.Skills}>
      <h1 ref={scrollToRef} className={classes.SectionTitle}>Skills</h1>
      <div className={classes.TechLists}>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'javascript' ? classes.Highlight : null
          }`}
          onClick={() => onClickHandler('javascript')}
        >
          <h2>
            Javascript
            <img src={imageAssets.clickIcon} alt="clickHere" />
          </h2>

          <p>
            ES6+, React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme,
            NodeJs, NextJs.
          </p>
        </div>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'python' ? classes.Highlight : null
          }`}
          onClick={() => onClickHandler('python')}
        >
          <h2>Python <img src={imageAssets.clickIcon} alt="clickHere" /></h2>
          <p>TkInter, PyGame, SQLite, Django.</p>
        </div>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'general' ? classes.Highlight : null
          }`}
          onClick={() => onClickHandler('general')}
        >
          <h2>General <img src={imageAssets.clickIcon} alt="clickHere" /></h2>
          <p>
            UX/UI design, SQL, HTML, CSS modules, GitHub/Git Commands, Unix
            Command-line, React/Redux Dev-Tools, Firebase Auth/Database/Hosting,
            Webpack, Photoshop, Gimp, Adobe Premiere Pro.
          </p>
        </div>
        <div>
          <div
            className={`${classes.TechSubsection} ${
              selectedContentTag === 'environment' ? classes.Highlight : null
            }`}
            onClick={() => onClickHandler('environment')}
          >
            <h2>Development Environment <img src={imageAssets.clickIcon} alt="clickHere" /></h2>
            <p>
              Ubuntu 20.04, Windows 10 & GitBash,
              VSCode, Pycharm, Firefox, Chrome.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
