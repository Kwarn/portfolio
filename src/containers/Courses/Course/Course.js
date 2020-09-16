import React from 'react'
import DrawToggle from '../../DrawToggle/DrawControl'
import classes from './Course.module.css'

const Course = ({ course, showModal }) => {
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
    <>
      <div className={classes.Course}>
        <div className={classes.CertificateContainer}>{previewCertificate}</div>
        <h3 className={classes.TitleContainer}>
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <DrawToggle drawContent={desc} />
      </div>
    </>
  )
}

export default Course
