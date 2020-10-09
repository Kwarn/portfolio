import React from 'react'
import DrawToggle from '../../DrawToggle/DrawControl'
import imageAssets from '../../../assets/assets'
import classes from './Course.module.css'

const Course = ({ course, showModal }) => {
  const { title, cert, certAlt, desc, courseLink } = course

  const certificate = cert ? (
    <img src={cert} alt={`${title} certificate`} />
  ) : (
    <img classes={classes.Certificate} src={certAlt} alt="alt-certificate" />
  )

  const magnifyingGlass = cert ? (
    <img src={imageAssets.magnifyingGlass} alt="click to view" />
  ) : null

  const description = <p>{desc}</p>
  return (
    <>
      <div className={classes.Course}>
        <div
          className={`${classes.CertificateWrapper} ${
            cert ? classes.HoverPointer : ''
          }`}
          onClick={cert ? () => showModal(certificate) : null}
        >
          {certificate}
          {magnifyingGlass}
        </div>
        <h3 className={classes.TitleContainer}>
          <a href={courseLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <DrawToggle drawContent={description} />
      </div>
    </>
  )
}

export default Course
