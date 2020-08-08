import React from 'react'
import { connect } from 'react-redux'
import Projects from '../projects/projects'
import FullProject from '../../../components/fullProject/fullProject'
import classes from './ProjectsOverview.module.css'

const ProjectsOverview = props => {
  const {projects, fullProject} = props

  let fullProjectDisplayed = <FullProject title={projects[fullProject].title} />

  return (
    <>
      <h1 className={classes.center}>Projects</h1>
      <div className={classes.Wrapper}>
        <div className={classes.Nav}>
          <Projects />
        </div>
        <div className={classes.FullProject}>{fullProjectDisplayed}</div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    fullProject: state.projects.fullProject,
  }
}

export default connect(mapStateToProps)(ProjectsOverview)
