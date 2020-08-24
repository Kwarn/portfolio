import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'
import imageAssets from '../../assets/assets'

const Home = props => {
  return (
    <div className={classes.Home}>
      <div className={classes.Title}>
        <img src={imageAssets.profileImage} alt="profileImage" />
        <h1>Karl Warner</h1>
        <p>{`</> Software Developer`}</p>
        <div className={classes.Buttons}>
          <Link to={{ pathname: '/projects' }}>
            <button>Projects</button>
          </Link>
          <Link to={{ pathname: '/skills' }}>
            <button>Skills</button>
          </Link>
        </div>
      </div>
      <p className={classes.Footer}>
        Website built and designed with react/css modules
      </p>
    </div>
  )
}

export default Home
