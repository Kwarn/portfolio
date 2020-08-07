import React, { useState } from 'react'
import Project from '../../../components/project/project'

const Projects = props => {
  const [projectsObject] = useState({
    burgerBuilder: {
      title: 'Burger Builder',
      techStack:
        'React, React-Router, Redux, Redux-Saga, Axios, Firebase realtime database, Firebase Hosting',
      gitHub: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: 'Learned alot.',
    },
    Fitness: {
      title: 'Fitness app',
      techStack: 'Python, Tkinter, sq3lite',
      gitHub: 'https://github.com/Kwarn/fitness',
      description: 'fitness app, learned lots',
    },
  })

  const displayFullProjectHandler = id => {}

  let projects = []

  for (let project in projectsObject) {
    projects.push(
      <Project
        key={project}
        id={project}
        title={projectsObject[project].title}
        tech={projectsObject[project].techStack}
        clicked={() => displayFullProjectHandler(project)}
      />
    )
  }

  return projects
}

export default Projects
