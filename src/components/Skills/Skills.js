import React from 'react'
import classes from './Skills.module.css'
import Courses from '../../containers/Courses/Courses'

const Skills = props => {
  return (
    <div className={classes.Skills}>
      <h1 className={classes.SectionTitle}>Technologies</h1>
      <div className={classes.TechLists}>
        <div className={classes.TechSubsection}>
          <h2>Javascript</h2>
          <p>
            React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme,
            react-transition-group
          </p>
        </div>
        <div className={classes.TechSubsection}>
          <h2>Python</h2>
          <p>TkInter, PyGame, SQLite</p>
        </div>
        <div className={classes.TechSubsection}>
          <h2>General</h2>
          <p>
            HTML, CSS modules, GitHub/Git Commands, Unix Command-line, Redux
            Dev-Tools, Firebase Auth/Database/Hosting, Webpack
          </p>
        </div>
        <div>
          <h2>Development Environment</h2>
          <p>Ubuntu 20.04, VSCode, Firefox/Chrome</p>
        </div>
      </div>

      <h1 className={classes.SectionTitle}>Courses and Certificates</h1>
      <Courses />
    </div>
  )
}

export default Skills
