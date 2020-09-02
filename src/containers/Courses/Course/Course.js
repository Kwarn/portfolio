import React from 'react'
import imageAssets from '../../../assets/assets'
import Draw from '../../Draw/Draw'
import classes from './Course.module.css'

const Course = ({ course, showModal, isHighlighted, firstElementRef }) => {
  const { title, cert, desc, courseLink } = course

  const certificate = <img src={cert} alt={`${title} certificate`} />

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
    <div ref={firstElementRef}>
      <div
        className={`${classes.Course} ${
          isHighlighted ? classes.Highlight : null
        }`}
      >
        <h1>{title}</h1>
        <div className={classes.Icons}>
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            <img src={imageAssets.magnifyingGlass} alt="showCourse" />
          </a>
          {certIcon}
        </div>
      </div>
      <Draw contentType="course" drawContentProps={drawContentProps} />
    </div>
  )
}

export default Course
