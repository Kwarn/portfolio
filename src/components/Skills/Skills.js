import React, { useState } from 'react'
import classes from './Skills.module.css'

const Skills = props => {
  const { selectedContentHandler, selectedContentTag } = props

  return (
    <div className={classes.Skills}>
      <h1 className={classes.SectionTitle}>Skills</h1>
      <div className={classes.TechLists}>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'javascript' ? classes.Highlight : null
          }`}
          onClick={() => selectedContentHandler('javascript')}
        >
          <h2>Javascript</h2>
          <p>
            React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme,
            react-transition-group
          </p>
        </div>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'python' ? classes.Highlight : null
          }`}
          onClick={() => selectedContentHandler('python')}
        >
          <h2>Python</h2>
          <p>TkInter, PyGame, SQLite</p>
        </div>
        <div
          className={`${classes.TechSubsection} ${
            selectedContentTag === 'general' ? classes.Highlight : null
          }`}
          onClick={() => selectedContentHandler('general')}
        >
          <h2>General</h2>
          <p>
            UX/UI design, HTML, CSS modules, GitHub/Git Commands, Unix
            Command-line, Redux Dev-Tools, Firebase Auth/Database/Hosting,
            Webpack
          </p>
        </div>
        <div>
          <div
            className={`${classes.TechSubsection} ${
              selectedContentTag === 'environment' ? classes.Highlight : null
            }`}
            onClick={() => selectedContentHandler('environment')}
          >
            <h2>Development Environment</h2>
            <p>Ubuntu 20.04, VSCode, Firefox/Chrome</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
