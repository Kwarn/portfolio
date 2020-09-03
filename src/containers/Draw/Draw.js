import React, { useState, useEffect } from 'react'
import imageAssets from '../../assets/assets'
import DrawContent from './DrawContent/DrawContent'
import classes from './Draw.module.css'

const Draw = ({ contentType, drawContentProps }) => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  const toggleDrawhandler = () => {
    setIsDrawOpen(!isDrawOpen)
    setIsMouseOverDraw(false)
  }

  useEffect(() => {
    if (drawContentProps.isAlwaysShown) setIsDrawOpen(true)
  }, [drawContentProps])

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
          isMouseOverDraw && !isDrawOpen
            ? `${classes.OpenDrawIcon} ${classes.ExpandDrawIcon}`
            : classes.CloseDrawIcon
        }
        src={!isDrawOpen ? imageAssets.downArrow : imageAssets.closeDraw}
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
