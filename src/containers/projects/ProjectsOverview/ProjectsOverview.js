import React from 'react'
import Projects from '../projects/projects'
import FullProject from '../../../components/fullProject/fullProject'
import classes from './ProjectsOverview.module.css'

const ProjectsOverview = props => {
  return (
    <>
      <h1>Projects</h1>
      <div className={classes.Wrapper}>
        <div className={classes.Nav}>
          <Projects />
        </div>
        <div className={classes.FullProject}>
          <FullProject />
        </div>
      </div>
    </>
  )
}

export default ProjectsOverview
