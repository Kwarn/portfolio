import React from 'react'
import FileSaver from 'file-saver'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItemsRight.module.css'

const saveFile = () =>
  FileSaver.saveAs(process.env.PUBLIC_URL + '/resource/test.jpg', 'test.jpg')

const navigationItemsRight = props => {
  return (
    <ul className={classes.NavigationItems}>
      <div className={classes.DownloadCV} onClick={saveFile}>
        Download CV
      </div>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  )
}

export default navigationItemsRight
