import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './Skills.module.css'

const Skills = props => {
  return (
    <div className={classes.Skills}>
      <h1 className={classes.Title}>Skills</h1>
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
