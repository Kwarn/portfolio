import React, { useState, useEffect } from 'react'
import imageAssets from '../../assets/assets'
import Draw from './Draw/Draw'
import classes from './DrawControl.module.css'

const DrawControl = ({
  drawContent,
  isDrawOpenByDefault,
  iconLocation = 'top',
  iconOnly = true,
  shouldAnimate = true,
}) => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  useEffect(() => {
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
      className={`${classes.DrawControl} 
        ${iconLocation === 'top' ? classes.TopRight : classes.BottomRight}`}
      onClick={() => toggleDrawhandler()}
      onMouseEnter={() => setIsMouseOverDraw(true)}
      onMouseLeave={() => setIsMouseOverDraw(false)}
    >
      {!iconOnly ? (
        !isDrawOpen ? (
          <div className={classes.MoreInfo}>Technical Info</div>
        ) : null
      ) : null}
      <img
        className={`${
          isDrawOpen ? classes.CloseDrawIcon : classes.OpenDrawIcon
        } ${shouldAnimate ? classes.AnimateOpenIcon : ''}`}
        src={isDrawOpen ? imageAssets.charcoalCross : imageAssets.infoIcon}
        alt={isDrawOpen ? 'closeDraw' : 'openDraw'}
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
