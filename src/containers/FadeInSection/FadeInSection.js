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
      className={`${classes.FadeInSection} ${
        isVisible ? classes.isVisible : ''
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  )
}

export default FadeInSection
