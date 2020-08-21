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
    courseLink: courseLink,
    desc: desc,
    cert: certificate,
  }

  return (
    <>
      <div className={classes.Course}>
        <h1>{title}</h1>
        <img onClick={()=>setIsModalOpen(true)} src={imageAssets.certificateIcon} alt="certificateIcon"></img>
      </div>
      <Draw contentType="course" drawContentProps={drawContentProps} />
      <Modal show={isModalOpen} close={()=>setIsModalOpen(false)}>{certificate}</Modal>
    </>
  )
}

export default Course
