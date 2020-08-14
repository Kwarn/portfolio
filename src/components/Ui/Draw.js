import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import classes from './Draw.module.css'

const Draw = props => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)
  const { title, openDrawContent } = props

  const toggleDrawhandler = () => {
    setIsDrawOpen(!isDrawOpen)
    setIsMouseOverDraw(false)
  }

  const drawContent = isDrawOpen ? props.openDrawContent : null

  const showTitle = title ? <h1 className={classes.Title}>{title}</h1> : null

  return (
    <>
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
      {drawContent}
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
    </>
  )
}

export default Draw
