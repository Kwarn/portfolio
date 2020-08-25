import React, { useState, useEffect, useRef } from 'react'
import classes from './FadeInSection.module.css'

function FadeInSection(props) {
  const { fadeDirection } = props
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <div
      className={`${
        fadeDirection === 'left'
          ? classes.FadeFromLeft
          : fadeDirection === 'right'
          ? classes.FadeFromRight
          : fadeDirection === 'top'
          ? classes.FadeFromTop
          : null
      } ${isVisible ? classes.IsVisible : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection
