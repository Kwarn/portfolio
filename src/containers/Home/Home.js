import React from 'react'
import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <Link to='/cv'>
        <button>Cv</button>
      </Link>
    </div>
  )
}

export default Home
