import React from 'react';
import imageAssets from '../../../assets/assets';
import classes from './ExtraInfo.module.css';

const ExtraInfo = ({ showModal }) => {
  const imageWithLink = (image, alt, link) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={alt} />
      </a>
    );
  };
  const imageWithModal = img => {
    const image = (
      <img
        onClick={() =>
          showModal({
            isShown: true,
            content: [img],
          })
        }
        src={img}
        alt="the art of readable code"
      />
    );
    return image;
  };

  const description = `Playing a pivotal role in improving my problem solving skills, coding challenges have also exposed me to which language features are available and their correct situational usage. I love the pursuit of the solution, from discovering new helpful resources to testing solutions in an isolated environment and organically discovering the language's inner workings.  
  
  I'm constantly challenging myself by not just solving the problem but also searching for and understanding the most elegant solutions. So far, I've completed all challenges on CodingBat, earned 1800 XP on Edabit solving primarily medium-hard difficulty problems and am currently working through certification on HackerRank.`;

  return (
    <div className={classes.Wrapper}>
      <div className={classes.ExtraInfo}>
        <h2>Code Challenges</h2>
        <p>{description}</p>
        <hr />
        <h2>Profiles & Resources</h2>
        {imageWithLink(
          imageAssets.hackerRank,
          'hackerRank',
          'https://www.hackerrank.com/karlwarner_dev'
        )}
        {imageWithLink(
          imageAssets.edabit,
          'edabit',
          'https://edabit.com/user/qgYikiD7WB8JciTdo'
        )}
        {imageWithLink(
          imageAssets.codingBat,
          'codingbat',
          'https://codingbat.com/done?user=karlwarner.dev@gmail.com&tag=6083086670'
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
        <hr />
        <div className={classes.Resources}></div>
        {imageWithModal(imageAssets.theArtOfReadableCode)}
        {imageWithModal(imageAssets.becomingABetterProgrammer)}
      </div>
    </div>
  );
};

export default ExtraInfo;
