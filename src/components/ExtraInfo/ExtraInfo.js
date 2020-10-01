import React from 'react'
import imageAssets from '../../assets/assets'
import classes from './ExtraInfo.module.css'

const ExtraInfo = ({ showModal }) => {
  const imageWithLink = (image, alt, link) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
    )
  }
  const imageWithModal = img => {
    const image = (
      <img
        onClick={() => showModal(<img src={img} alt="with modal" />)}
        src={img}
        alt="the art of readable code"
      />
    )
    return image
  }

  return (
    <div className={classes.ExtraInfo}>
      <h2>Code Challenges</h2>
      <p>
        Code challenges have been one of the best methods of learning which
        language features are available and their correct application.
        I've completed all challenges on CodingBat, earned 1800 XP on Edabit
        solving primarily medium-hard difficulty problems and am currently
        working through certification on HackerRank.
      </p>
      <hr />
      {imageWithLink(
        imageAssets.hackerRank,
        'hackerRank',
        'https://www.hackerrank.com/karlwarner_dev'
      )}
      {imageWithLink(
        imageAssets.codingBat,
        'codingbat',
        'https://codingbat.com/done?user=karlwarner.dev@gmail.com&tag=6083086670'
      )}
      {imageWithLink(
        imageAssets.edabit,
        'edabit',
        'https://edabit.com/user/qgYikiD7WB8JciTdo'
      )}
      {imageWithLink(
        imageAssets.udemy,
        'udemy',
        'https://www.udemy.com/user/karl-warner-5/'
      )}
      {imageWithLink(
        imageAssets.freeCodeCamp,
        'freeCodeCamp',
        'https://www.freecodecamp.org/karl_warner'
      )}
      {imageWithLink(
        imageAssets.codeCademy,
        'codecademy',
        'https://www.codecademy.com/profiles/Xeptic'
      )}
      <h2>Reading Material</h2>
      <hr />
      <div className={classes.Resources}></div>
      {imageWithModal(imageAssets.theArtOfReadableCode)}
      {imageWithModal(imageAssets.becomingABetterProgrammer)}
      {imageWithLink(
        imageAssets.stackOverflow,
        'stackOverflow',
        'https://stackoverflow.com'
      )}
    </div>
  )
}

export default ExtraInfo
