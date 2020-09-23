import { useState, useEffect } from 'react'

const ObserveIntersection = ({ targetRef, children }) => {
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const tRef = targetRef
    if (!hasIntersected) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setHasIntersected(true)
            observer.unobserve(tRef.current)
          }
        })
      })
      observer.observe(tRef.current)
    }
  })

  return hasIntersected ? children : null
}

export default ObserveIntersection
