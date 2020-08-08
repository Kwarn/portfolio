import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <Link to='/cv'>
        <button>Cv</button>
      </Link>
      <Link to='/projects'>
        <button>Projects</button>
      </Link>
      <Link to='/contact'>
        <button>Contact</button>
      </Link>
    </div>
  )
}

export default Home
