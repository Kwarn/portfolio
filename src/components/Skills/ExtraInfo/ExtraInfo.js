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
          <a
            href="https://www.oreilly.com/library/view/the-art-of/9781449318482/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageAssets.theArtOfReadableCode}
              alt="theArtOfReadableCode"
            />
          </a>
          <a
            href="https://www.oreilly.com/library/view/becoming-a-better/9781491905562/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageAssets.becomingABetterProgrammer}
              alt="becomingABetterProgrammeru"
            />
          </a>

          <a
            href="https://edabit.com/user/qgYikiD7WB8JciTdo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imageAssets.edabit} alt="edabit" />
            <a
              href="https://codingbat.com/done?user=karlwarner.dev@gmail.com&tag=6083086670"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageAssets.codingBat} alt="codingbat" />
            </a>
            <a
              href="https://www.udemy.com/user/karl-warner-5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageAssets.udemy} alt="udemy" />
            </a>
          </a>
          <a
            href="https://www.freecodecamp.org/karl_warner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imageAssets.freeCodeCamp} alt="freeCodeCamp" />
          </a>
          <a
            href="https://www.codecademy.com/profiles/Xeptic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imageAssets.codeCademy} alt="codeCademy" />
          </a>
          <a
            href="https://stackoverflow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imageAssets.stackOverflow} alt="stackOverflow" />
          </a>
        </div>
      </div>
    </FadeInSection>
  )
}

export default ExtraInfo
