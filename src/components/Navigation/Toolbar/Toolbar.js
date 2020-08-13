import React from 'react'
import NavigationItemsLeft from '../NavigationItems/NavigationItemsLeft/NavigationItemsLeft'
import NavigationItemsRight from '../NavigationItems/NavigationItemsRight/NavigationItemsRight'
import classes from './Toolbar.module.css'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <nav>
      <NavigationItemsLeft />
    </nav>
    <nav>
      <NavigationItemsRight />
    </nav>
  </header>
)

export default toolbar
