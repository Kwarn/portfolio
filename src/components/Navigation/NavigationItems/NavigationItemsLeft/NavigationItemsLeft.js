import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItemsLeft.module.css'

const navigationItemsLeft = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
    </ul>
  )
}

export default navigationItemsLeft
