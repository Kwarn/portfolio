import React from 'react'
import Projects from '../projects/projects'
import FullProject from '../../../components/fullProject/fullProject'
import classes from './ProjectsOverview.module.css'

const ProjectsOverview = props => {
  let fullProject = <FullProject />

  return (
    <>
      <h1 className={classes.center}>Projects</h1>
      <div className={classes.Wrapper}>
        <div className={classes.Nav}>
          <Projects />
        </div>
        <div className={classes.FullProject}>
          {fullProject}
        </div>
      </div>
    </>
  )
}

export default ProjectsOverview
