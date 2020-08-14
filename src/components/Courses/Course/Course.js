import React, { useState } from 'react'
import imageAssets from '../../../assets/assets'
import classes from './Course.module.css'


const Course = props => {
  const { title, desc, cert } = props
  const [showFullCourse, setShowFullCourse] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  const toggleDrawhandler = () => {
    setShowFullCourse(!showFullCourse)
    setIsMouseOverDraw(false)
  }

  const drawDrop = (
    <div
      className={
        !showFullCourse ? classes.OpenDrawWrapper : classes.CloseDrawWrapper
      }
      onClick={() => toggleDrawhandler()}
      onMouseEnter={() => setIsMouseOverDraw(true)}
      onMouseLeave={() => setIsMouseOverDraw(false)}
    >
      <img
        className={
          isMouseOverDraw
            ? `${classes.DrawIcon} ${classes.ExpandDrawIcon}`
            : classes.DrawIcon
        }
        src={!showFullCourse ? imageAssets.openDraw : imageAssets.closeDraw}
        alt={!showFullCourse ? 'openDraw' : 'closeDraw'}
      />
    </div>
  )

  

  return (
    <div className={classes.Course}>
      <h1 className={classes.Title}>{title}</h1>
      {/* <p className={classes.Desc}> {desc}</p> */}
      <img className={classes.Image} src={cert} alt={`${title} certificate`} />
    </div>
  )
}

export default Course
