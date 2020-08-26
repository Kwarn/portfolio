import React from 'react'
import imageAssets from '../../../assets/assets'
import Draw from '../../Draw/Draw'
import classes from './Course.module.css'

const Course = props => {
  const { title, desc, cert, courseLink, showModal, isHighlighted } = props

  const certificate = (
    <img className={classes.Image} src={cert} alt={`${title} certificate`} />
  )

  const drawContentProps = {
    title: 'More info',
    desc: desc,
    isAlwaysShown:
      title === 'Javascript - The Complete Guide 2020 (Beginner + Advanced)',
  }

  const certIcon = cert ? (
    <img
      onClick={() => showModal(certificate)}
      src={imageAssets.certificateIcon}
      alt="certificateIcon"
    />
  ) : null

  return (
    <>
      <div className={`${classes.Course} ${isHighlighted ? classes.Highlight : null}`}>
        <h1>{title}</h1>
        <div className={classes.Icons}>
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            <img src={imageAssets.showDemo} alt="showCourse" />
          </a>
          {certIcon}
        </div>
      </div>
      <Draw contentType="course" drawContentProps={drawContentProps} />
    </>
  )
}

export default Course
