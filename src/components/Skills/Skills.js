import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './Skills.module.css'

const Skills = props => {
  return (
    <div className={classes.Skills}>
      <h1 className={classes.Title}>Skills</h1>
      <div className={classes.TechLists}>
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
      <div className={classes.Images}>
        <img
          src={imageAssets.javascriptCertificate}
          alt="javascriptCertificate"
        ></img>
        <img src={imageAssets.reactCertificate} alt="reactCertificate"></img>
      </div>
    </div>
  )
}

export default Skills
