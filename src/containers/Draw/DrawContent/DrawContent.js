import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import classes from './DrawContent.module.css'

const DrawContent = props => {
  const { isMouseOverDraw, cert, courseLink } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  let content = null

  if (props.isProject) {
    content = (
      <>
        <p className={classes.Desc}>{props.desc}</p>
        <p className={classes.ListHeader}>What I learned:</p>
        <ul className={classes.LearnedList}>{props.lessonsListItems}</ul>
      </>
    )
  } else {
    content = (
      <>
        <p>{courseLink}</p>
        <div className={classes.MouseOverCert} onClick={() => setIsModalOpen(true)}>{cert}</div>
        <p className={classes.Desc}>{props.desc}</p>
      </>
    )
  }

  return (
    <>
      <div
        className={
          isMouseOverDraw
            ? `${classes.DrawContent} ${classes.OnMouseOverDraw}`
            : classes.DrawContent
        }
      >
        {content}
      </div>
      <Modal show={isModalOpen} close={()=> setIsModalOpen(false)}>
        {cert}
      </Modal>
    </>
  )
}
export default DrawContent
