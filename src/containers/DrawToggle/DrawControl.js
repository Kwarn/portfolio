import React, { useState, useEffect } from 'react'
import imageAssets from '../../assets/assets'
import Draw from './Draw/Draw'
import classes from './DrawControl.module.css'

const DrawControl = ({
  drawContent,
  isDrawOpenByDefault,
  iconLocation = 'top',
  iconOnly = true,
}) => {
  const [isDrawOpen, setIsDrawOpen] = useState(false)
  const [isMouseOverDraw, setIsMouseOverDraw] = useState(false)

  useEffect(() => {
    if (isDrawOpenByDefault) setIsDrawOpen(true)
  }, [isDrawOpenByDefault])

  const toggleDrawhandler = () => {
    setIsDrawOpen(!isDrawOpen)
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
      {!iconOnly ? !isDrawOpen ? <div>More info</div> : null : null}

      <img
        className={isDrawOpen ? classes.CloseDrawIcon : classes.OpenDrawIcon}
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
