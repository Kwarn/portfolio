import React from 'react'
import Projects from '../../containers/Projects/Projects'
import classes from './ProjectsOverview.module.css'

const ProjectsOverview = props => {

  return (
    <div className={classes.ProjectsOverview}>
      <div className={classes.Wrapper}>
        <div className={classes.Projects}>
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default ProjectsOverview
