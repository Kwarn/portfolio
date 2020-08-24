import React, { useState, useEffect } from 'react'
import NavigationItemsLeft from '../NavigationItems/NavigationItemsLeft/NavigationItemsLeft'
import NavigationItemsRight from '../NavigationItems/NavigationItemsRight/NavigationItemsRight'
import classes from './Toolbar.module.css'

const Toolbar = props => {
  const [scrollPos, setScrollPos] = useState({
    posY: window.pageYOffset,
    visible: true,
  })

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = () => {
    const newScrollPos = window.pageYOffset
    const visible = scrollPos.posY > newScrollPos
    setScrollPos({ posY: newScrollPos, visible: visible })
  }

  return (
    <header
      className={
        !scrollPos.visible
          ? `${classes.Toolbar} ${classes.ToolbarHidden}`
          : `${classes.Toolbar} ${classes.ToolbarShown}`
      }
    >
      <nav>
        <NavigationItemsLeft />
      </nav>
      <nav>
        <NavigationItemsRight />
      </nav>
    </header>
  )
}

export default Toolbar
