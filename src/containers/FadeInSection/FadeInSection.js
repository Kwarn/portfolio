import React, { useState, useEffect, useRef } from 'react'
import classes from './FadeInSection.module.css'

function FadeInSection(props) {
  const { fadeDirection } = props
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const domRefCurrent = domRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)
    return () => observer.unobserve(domRefCurrent)
  }, [])

  return (
    <div
      className={`${
        fadeDirection === 'top'
          ? classes.FadeFromTopDown
          : classes.FadeFromBottomUp
      } ${isVisible ? classes.isVisible : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection
