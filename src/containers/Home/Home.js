import React from 'react'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'

const Home = props => {
  return (
    <div className={classes.Home}>
      <h1>Testing</h1>
      <img src={imageAssets.homeBackground} alt='background'></img>
    </div>
  )
}

export default Home
