import React from 'react'
import imageAssets from '../../../assets/assets'
import DrawToggle from '../../DrawToggle/DrawControl'
import classes from './Course.module.css'

const Course = ({ course, showModal, isHighlighted, elementRef }) => {
  const { title, cert, desc, courseLink } = course

  const certificate = <img src={cert} alt={`${title} certificate`} />

  const previewCertificate = cert ? (
    <img
      onClick={() => showModal(certificate)}
      src={cert}
      alt="certificateIcon"
    />
  ) : null

  return (
    <div ref={elementRef}>
      <div
        className={`${classes.Course} ${
          isHighlighted ? classes.Highlight : null
        }`}
      >
        <h1 className={classes.TitleContainer}>
          {title}
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            <img src={imageAssets.magnifyingGlass} alt="showCourse" />
          </a>
        </h1>
        <div className={classes.CertificateContainer}>{previewCertificate}</div>
      </div>
      <DrawToggle
        isDrawOpenByDefault={
          title === 'Javascript - The Complete Guide 2020 (Beginner + Advanced)'
        }
        drawContent={desc}
      />
    </div>
  )
}

export default Course
