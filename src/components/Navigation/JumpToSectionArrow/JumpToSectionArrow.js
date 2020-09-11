import React from 'react'
import FadeInSection from '../../../containers/FadeInSection/FadeInSection'
import imageAssets from '../../../assets/assets'
import classes from './JumpToSectionArrow.module.css'

const JumpToSectionArrow = ({
  arrowColor,
  arrowDirection,
  scrollIntoViewFn,
  scrollTarget,
}) => {
  const arrowImages = {
    light: {
      up: imageAssets.whiteUpArrow,
      down: imageAssets.whiteDownArrow,
    },
    dark: {
      up: imageAssets.charcoalUpArrow,
      down: imageAssets.charcoalDownArrow,
    },
  }

  const arrowImage = arrowImages[arrowColor || 'dark'][arrowDirection || 'down']

  return (
    <FadeInSection fadeDirection={arrowDirection === 'up' ? 'top' : 'bottom'}>
      <img
        className={`
          ${
            arrowDirection === 'top'
              ? classes.ScrollUpArrow
              : classes.ScrollDownArrow
          } ${scrollIntoViewFn && scrollTarget ? classes.Clickable : ''}`}
        src={arrowImage}
        alt="openDrawIcon"
        onClick={
          scrollIntoViewFn && scrollTarget
            ? () => scrollIntoViewFn(scrollTarget)
            : null
        }
      />
    </FadeInSection>
  )
}

export default JumpToSectionArrow
