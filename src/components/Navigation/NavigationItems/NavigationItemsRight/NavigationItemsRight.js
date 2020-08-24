import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItemsRight.module.css'

const navigationItemsRight = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  )
}

export default navigationItemsRight
