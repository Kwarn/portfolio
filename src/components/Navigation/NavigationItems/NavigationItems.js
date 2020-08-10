import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from '../NavigationItems/NavigationItems.module.css'

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/projects">Projects</NavigationItem>
      <NavigationItem link="/cv">Cv</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  )
}

export default navigationItems
