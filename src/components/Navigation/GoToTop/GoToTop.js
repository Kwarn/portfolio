import React, { useState, useEffect } from 'react'
import classes from './GoToTop.module.css'
import JumpToSectionArrow from '../JumpToSectionArrow/JumpToSectionArrow'

const GoToTop = ({ scrollToTop }) => {
  const [scrollPos, setScrollPos] = useState({
    posY: window.pageYOffset,
    visible: false,
  })

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = () => {
    const newScrollPos = window.pageYOffset
    if (Math.abs(document.body.scrollHeight - window.pageYOffset) < 1000) {
      setScrollPos({ posY: newScrollPos, visible: true })
    } else {
      if (newScrollPos > 300) {
        const visible = scrollPos.posY > newScrollPos
        setScrollPos({ posY: newScrollPos, visible: visible })
      } else {
        setScrollPos({ posY: newScrollPos, visible: false })
      }
    }
  }

  return (
    <footer
      className={
        !scrollPos.visible
          ? `${classes.GoToTop} ${classes.GoToTopHidden}`
          : `${classes.GoToTop} ${classes.GoToTopShown}`
      }
    >
      <JumpToSectionArrow
        arrowText="Back to top"
        arrowDirection="up"
        shouldFadeIn={false}
        shouldPulse={false}
        scrollIntoViewFn={scrollToTop}
      />
    </footer>
  )
}

export default GoToTop
