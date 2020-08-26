import React, { useState } from 'react'
import Project from './Project/Project'
import classes from './Projects.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'

const Projects = props => {
  const [projects] = useState({
    burgerBuilder: {
      title: 'Burger Builder',
      liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, Css',
      gitHubLink: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: `This app allows users to create and order their own customized burger.
       Features include form validation, authentication, database management,
        automatic login and preservation of the users session. `,
      lessons: `Multiple approaches to Handling State, Authentication tokens 
        and localStorage, Asynchronous actions, Class-based components 
        and lifecycle hooks, Functional components and react hooks, 
        Higher order components, Form validation, Database rules configuration`,
    },
    SquarePlayground: {
      title: 'Square Playground',
      previewTechStack: 'Javascript, React, Redux, Css, Html',

      gitHubLink: 'placeholder',
      description: `This is a gambling game based on simple random chance logic to match boxes
        like a slot machine. This was my first dive into the world of javascript and React,
        built with pure google-fu and no tutorials!`,
      lessons: 'Fundamentals of state and data management',
    },
    Fitness: {
      title: 'Fitness',
      previewTechStack: 'Python, Tkinter, SQlite3',

      gitHubLink: 'https://github.com/Kwarn/fitness',
      description: `This is a light-weight MyFitnessPal clone, my first attempt at building
        a python app.
        it allows users to track meals and add new meals and ingredients
        to a SQlite database along with their calorie information`,
      lessons: 'Database queries',
    },
    shutdownTimer: {
      title: 'Shutdown Timer',
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'placeholder',
      description:
        'Desktop Application for setting an automatic shutdown/reset/sleep time',
      lessons: 'System process access',
    },
  })

  let projectElements = []
  for (let project in projects) {
    projectElements.push(
      <FadeInSection key={project} fadeDirection="top">
        <Project projectId={project} project={projects[project]} />
      </FadeInSection>
    )
  }

  return (
    <div className={classes.Projects}>
      <h1 className={classes.SectionTitle}>Projects</h1>
      <div className={classes.ProjectsContainer}>{projectElements}</div>
    </div>
  )
}

export default Projects
