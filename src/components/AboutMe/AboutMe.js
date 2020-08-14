import React from 'react'
import classes from './AboutMe.module.css'
import FullProject from '../../containers/Ui/DrawContent/DrawContent'
import Draw from '../../containers/Ui/Draw'

const AboutMe = props => {
  const fullProject = (
    <FullProject
      projectId={'burgerBuilder'}
      desc={'blah blah'}
      lessons={'javascript, react'}
      techStack={'techStack'}
    />
  )

  return (
    <div className={classes.AboutMe}>
      <h1>About Me</h1>
      <Draw title="Testing" openDrawContent={fullProject} />
      <p></p>
    </div>
  )
}

export default AboutMe
