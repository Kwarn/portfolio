import React, { useRef } from 'react'
import classes from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={classes.LayoutWrapper}>
      <main className={classes.Content}>{children}</main>
    </div>
  )
}

export default Layout
