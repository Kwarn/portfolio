import React from 'react';
import imageAssets from '../../assets/assets';
import classes from './WelcomeElements.module.css';

const WelcomeElements = () => {
  return (
    <>
      <div className={classes.WelcomeElements}>
        <div className={classes.Background} />
        <img
          className={classes.ProfileImage}
          src={imageAssets.profileImage}
          alt="profileImage"
        />
        <div className={classes.TitleGroup}>
          <div>
            <h1>Karl Warner</h1>
            <p>{`</> Full-Stack Web Developer`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeElements;
