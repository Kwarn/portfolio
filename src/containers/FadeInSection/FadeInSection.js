import React, { useState, useEffect, useRef } from 'react'
import classes from './FadeInSection.module.css'

function FadeInSection({
  fadeDirection,
  childAlignDirection,
  children,
  delayRenderDuration,
}) {
  const [isVisible, setVisible] = useState(false)
  const [animationShouldStop, setAnimationShouldStop] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    if (!animationShouldStop) {
      const domRefCurrent = domRef.current
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setTimeout(() => {
            setVisible(entry.isIntersecting)
          }, delayRenderDuration)
          if (entry.isIntersecting) setAnimationShouldStop(true)
        })
      })

      observer.observe(domRef.current)
      return () => observer.unobserve(domRefCurrent)
    }
  }, [delayRenderDuration, animationShouldStop])

  const fadeDirections = {
    top: classes.FadeToTop,
    bottom: classes.FadeToBottom,
    left: classes.FadeToLeft,
    right: classes.FadeToRight,
  }

  const alignChildDirection = {
    left: classes.AlignChildLeft,
    right: classes.AlignChildRight,
    center: classes.AlignChildCenter,
  }

  return (
    <div
      className={`${classes.FadeInSection} ${fadeDirections[fadeDirection]} ${
        alignChildDirection[childAlignDirection]
      } ${isVisible ? classes.isVisible : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default FadeInSection
