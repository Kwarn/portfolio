import React from 'react'
import classes from './Skills.module.css'

const Skills = props => {
  const { selectedContentHandler } = props

  return (
    <div className={classes.Skills}>
      <h1 className={classes.SectionTitle}>Skills</h1>
      <div className={classes.TechLists}>
        <div
          className={classes.TechSubsection}
          onClick={() => selectedContentHandler('javascript')}
        >
          <h2>Javascript</h2>
          <p>
            React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme,
            react-transition-group
          </p>
        </div>
        <div
          className={classes.TechSubsection}
          onClick={() => selectedContentHandler('python')}
        >
          <h2>Python</h2>
          <p>TkInter, PyGame, SQLite</p>
        </div>
        <div
          className={classes.TechSubsection}
          onClick={() => selectedContentHandler('general')}
        >
          <h2>General</h2>
          <p>
            HTML, CSS modules, GitHub/Git Commands, Unix Command-line, Redux
            Dev-Tools, Firebase Auth/Database/Hosting, Webpack
          </p>
        </div>
        <div>
          <div
            className={classes.TechSubsection}
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
