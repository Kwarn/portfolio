import React from 'react'
import FileSaver from 'file-saver'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
import imageAssets from '../../../assets/assets'

const saveFile = () =>
  FileSaver.saveAs(process.env.PUBLIC_URL + '/resource/Karl_Warner_CV.pdf', 'Karl_Warner_CV.pdf')

const NavigationItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavigationItem link="/">Home</NavigationItem>

      <div className={classes.DownloadCV} onClick={saveFile}>
        <p>CV</p>
        <img src={imageAssets.downloadIcon} alt="download CV" />
      </div>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  )
}

export default NavigationItems
