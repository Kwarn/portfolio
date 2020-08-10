import React from 'react'
import { connect } from 'react-redux'
import Projects from '../Projects/Projects'
import FullProject from '../../../components/FullProject/FullProject'
import classes from './ProjectsOverview.module.css'

const ProjectsOverview = props => {
  const { projects, fullProject } = props

  let fullProjectDisplayed = (
    <FullProject
      projectId={fullProject}
      title={projects[fullProject].title}
      desc={projects[fullProject].description}
    />
  )
  // const fullProjectRef = useRef()

  return (
    <div className={classes.ProjectsOverview}>

      <h1 className={classes.ProjectsHeader}>Projects</h1>
      <div className={classes.Wrapper}>
        <div className={classes.Nav}>
          <Projects />
        </div>
        <hr/>
        <div className={classes.FullProject}>{fullProjectDisplayed}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    fullProject: state.projects.fullProject,
  }
}

export default connect(mapStateToProps)(ProjectsOverview)
