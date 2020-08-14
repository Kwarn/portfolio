import React from 'react'
import classes from './Course.module.css'
import Draw from '../../../containers/Draw/Draw'

const Course = props => {
  const { title, desc, cert } = props

  const certificate = (
    <img className={classes.Image} src={cert} alt={`${title} certificate`} />
  )

  const drawContentProps = {
    title: 'More info',
    desc: desc,
    cert: certificate
  }

  return (
    <>
      <div className={classes.Course}>
        <h1>{title}</h1>
      </div>
      <Draw contentType='course' drawContentProps={drawContentProps} />
    </>
  )
}

export default Course
