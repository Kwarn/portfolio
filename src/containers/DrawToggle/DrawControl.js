import React, { useState, useEffect } from 'react'
import imageAssets from '../../assets/assets'
import Draw from './Draw/Draw'
import classes from './DrawControl.module.css'

const DrawControl = ({ drawContent, isDrawOpenByDefault }) => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  useEffect(()=> {
    if (isDrawOpenByDefault) setIsDrawOpen(true)
  }, [isDrawOpenByDefault])

  const toggleDrawhandler = () => {
    setIsDrawOpen(!isDrawOpen)
    setIsMouseOverDraw(false)
  }

  const draw = isDrawOpen ? (
    <Draw isMouseOverDraw={isMouseOverDraw} content={drawContent} />
  ) : null

  const control = (
    <div
      className={classes.DrawControlWrapper}
      onClick={() => toggleDrawhandler()}
      onMouseEnter={() => setIsMouseOverDraw(true)}
      onMouseLeave={() => setIsMouseOverDraw(false)}
    >
      <img
        className={isDrawOpen ? classes.CloseDrawIcon : classes.OpenDrawIcon}
        src={!isDrawOpen ? imageAssets.downArrow : imageAssets.closeDraw}
        alt={!isDrawOpen ? 'openDraw' : 'closeDraw'}
      />
    </div>
  )

  return (
    <>
      {draw}
      {control}
    </>
  )
}

export default DrawControl
