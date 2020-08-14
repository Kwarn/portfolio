import React from 'react'
import classes from './Skills.module.css'
import Courses from '../Courses/Courses'

const Skills = props => {
  return (
    <div className={classes.Skills}>
      <div className={classes.TechLists}>
        <h1 className={classes.Title}>Languages and Frameworks</h1>
        <div className={classes.JavascriptList}>
          <h2>Javascript</h2>
          <ul>
            <li>React</li>
            <li>React-Redux</li>
            <li>React-Router</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className={classes.PythonList}>
          <h2>Python</h2>
          <ul>
            <li>Tkinter</li>
            <li>Pygame</li>
            <li>sqlite3</li>
          </ul>
        </div>
      </div>
      <h1>Comprehensive Courses</h1>
      <Courses></Courses>
      <h1>Development environment</h1>
    </div>
  )
}

export default Skills
