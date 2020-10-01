import React from 'react'
import FileSaver from 'file-saver'
import NavigationItem from '../NavigationItem/NavigationItem'
import classes from './NavigationItemsRight.module.css'
import imageAssets from '../../../../assets/assets'

const saveFile = () =>
  FileSaver.saveAs(process.env.PUBLIC_URL + '/resource/test.jpg', 'test.jpg')

const navigationItemsRight = props => {
  return (
    <ul className={classes.NavigationItems}>
      <div className={classes.DownloadCV} onClick={saveFile}>
        <p>CV</p>
        <img src={imageAssets.downloadIcon} alt="download CV"></img>
      </div>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  )
}

export default navigationItemsRight
