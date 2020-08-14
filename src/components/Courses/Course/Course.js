import React from 'react'
import classes from './Course.module.css'

const Course = props => {
  const { title, desc, cert } = props

  return (
    <div className={classes.Course}>
      <h1 className={classes.Title}>{title}</h1>
      <img className={classes.Image} src={cert} alt={`${title} certificate`} />
    </div>
  )
}

export default Course
