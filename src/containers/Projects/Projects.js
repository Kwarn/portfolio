import React from 'react'
import { connect } from 'react-redux'
import Project from './Project/Project'
import * as actions from '../../store/actions/index'

const Projects = props => {
  const { projects } = props

  const displayFullProjectHandler = projectId => {
    props.switchFullProject(projectId)
  }

  let projectElements = []
  for (let project in projects) {
    projectElements.push(
      <Project
        key={project}
        projectId={project}
        project={projects[project]}
        clicked={() => displayFullProjectHandler(project)}
      />
    )
  }

  return projectElements
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    switchFullProject: (projectId) => dispatch(actions.switchFullProject(projectId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
