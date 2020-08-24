import React, { useState } from 'react'
import imageAssets from '../../../assets/assets'
import Draw from '../../Draw/Draw'
import Modal from '../../../components/Modal/Modal'
import classes from './Course.module.css'

const Course = props => {
  const { title, desc, cert, courseLink } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  const certificate = (
    <img className={classes.Image} src={cert} alt={`${title} certificate`} />
  )

  const drawContentProps = {
    title: 'More info',
    desc: desc,
  }

  const certIcon = cert ? (
    <img
      onClick={() => setIsModalOpen(true)}
      src={imageAssets.certificateIcon}
      alt="certificateIcon"
    />
  ) : null

  return (
    <>
      <div className={classes.Course}>
        <h1>{title}</h1>
        <div className={classes.Icons}>
          <a href={courseLink} target="_blank" rel="noopener noreferrer" >
            <img src={imageAssets.showDemo} alt="showCourse" />
          </a>
          {certIcon}
        </div>
      </div>
      <Draw contentType="course" drawContentProps={drawContentProps} />
      <Modal show={isModalOpen} close={() => setIsModalOpen(false)}>
        {certificate}
      </Modal>
    </>
  )
}

export default Course
