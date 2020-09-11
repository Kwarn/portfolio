import React from 'react'
import imageAssets from '../../../assets/assets'
import DrawToggle from '../../DrawToggle/DrawControl'
import classes from './Course.module.css'

const Course = ({ course, showModal, isHighlighted }) => {
  const { title, cert, desc, courseLink, isOpenByDefault } = course

  const certificate = <img src={cert} alt={`${title} certificate`} />

  const previewCertificate = cert ? (
    <img
      onClick={() => showModal(certificate)}
      src={cert}
      alt="certificateIcon"
    />
  ) : null

  return (
    <>
      <div
        className={`${classes.Course} ${
          isHighlighted ? classes.Highlight : null
        }`}
      >
        <h3 className={classes.TitleContainer}>
          {title}
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            <img src={imageAssets.magnifyingGlass} alt="showCourse" />
          </a>
        </h3>
        <div className={classes.CertificateContainer}>{previewCertificate}</div>
      </div>
      <DrawToggle isDrawOpenByDefault={isOpenByDefault} drawContent={desc} />
    </>
  )
}

export default Course
