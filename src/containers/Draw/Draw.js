import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import DrawContent from '../DrawContent/DrawContent'
import classes from './Draw.module.css'

const Draw = props => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)
  const { contentType, drawContentProps } = props

  const toggleDrawhandler = () => {
    setIsDrawOpen(!isDrawOpen)
    setIsMouseOverDraw(false)
  }

  const showTitle = drawContentProps.title ? (
    <h1
      className={
        contentType === 'project' ? classes.ProjectTitle : classes.CourseTitle
      }
    >
      {drawContentProps.title}
    </h1>
  ) : null

  const drawToggle = (
    <div
      className={
        !isDrawOpen
          ? isMouseOverDraw
            ? `${classes.DrawToggle} ${classes.HighlightDrawToggle}`
            : classes.DrawToggle
          : classes.DrawToggle
      }
      onMouseEnter={() => setIsMouseOverDraw(true)}
      onMouseLeave={() => setIsMouseOverDraw(false)}
      onClick={() => toggleDrawhandler()}
    >
      {showTitle}
    </div>
  )

  const drawContent = isDrawOpen ? (
    <DrawContent isMouseOverDraw={isMouseOverDraw} {...drawContentProps} />
  ) : null

  const drawToggleIconWithWrapper = (
    <div
      className={
        !isDrawOpen ? classes.OpenDrawWrapper : classes.CloseDrawWrapper
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
        src={!isDrawOpen ? imageAssets.openDraw : imageAssets.closeDraw}
        alt={!isDrawOpen ? 'openDraw' : 'closeDraw'}
      />
    </div>
  )

  return (
    <>
      {drawToggle}
      {drawContent}
      {drawToggleIconWithWrapper}
    </>
  )
}

export default Draw
