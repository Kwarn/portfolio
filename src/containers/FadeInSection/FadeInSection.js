import React, { useState, useEffect, useRef } from 'react'
import classes from './FadeInSection.module.css'

function FadeInSection({ fadeDirection, children }) {
  const [isVisible, setVisible] = useState(false)
  const [animationShouldStop, setAnimationShouldStop] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    if (!animationShouldStop) {
      const domRefCurrent = domRef.current
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setVisible(entry.isIntersecting)
          if (entry.isIntersecting) setAnimationShouldStop(true)
        })
      })

      observer.observe(domRef.current)
      return () => observer.unobserve(domRefCurrent)
    }
  }, [animationShouldStop])

  return (
    <div
      className={`${
        fadeDirection === 'top'
          ? classes.FadeFromTopDown
          : classes.FadeFromBottomUp
      } ${isVisible ? classes.isVisible : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default FadeInSection
