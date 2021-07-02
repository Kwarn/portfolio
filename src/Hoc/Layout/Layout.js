import React, { useRef } from 'react'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import GoToTop from '../../components/Navigation/GoToTop/GoToTop'

const Layout = ({ children }) => {
  const ref = useRef(null)
  const scrollToTop = () => {
    ref.current.scrollIntoView({
      block: 'center',
      inline: 'center',
      behavior: 'smooth',
    })
  }

  return (
    <div className={classes.LayoutWrapper}>
      {/* <Toolbar /> */}
      <div ref={ref}></div>
      <main className={classes.Content}>{children}</main>
      {/* <GoToTop scrollToTop={scrollToTop} /> */}
    </div>
  )
}

export default Layout
