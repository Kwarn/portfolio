import React from 'react'
import FadeInSection from '../../../containers/FadeInSection/FadeInSection'
import classes from './ExtraInfo.module.css'
import imageAssets from '../../../assets/assets'

const ExtraInfo = prop => {
  return (
    <FadeInSection>
      <div className={classes.ExtraInfo}>
        <div className={classes.ContentContainer}>
          <h2>{`Reading Material & Resources`}</h2>
          <img
            src={imageAssets.theArtOfReadableCode}
            alt="theArtOfReadableCode"
          ></img>
          <img
            src={imageAssets.becomingABetterProgrammer}
            alt="becomingABetterProgrammeru"
          ></img>
        </div>
      </div>
    </FadeInSection>
  )
}

export default ExtraInfo
