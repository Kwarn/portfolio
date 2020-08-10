import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './Education.module.css'

const Education = props => {
  return (
    <div className={classes.Education}>
      <h1 className={classes.Title} >Education</h1>
      <div className={classes.Images}>
      <img src={imageAssets.javascriptCertificate} alt='javascriptCertificate'></img>
      <img src={imageAssets.reactCertificate} alt='reactCertificate'></img>
      </div>
    </div>
  )
}

export default Education
