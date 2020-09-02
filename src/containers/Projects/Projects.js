import React, { useState } from 'react'
import Project from './Project/Project'
import classes from './Projects.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'

const Projects = props => {
  const { selectedContentTag, firstElementRefs } = props

  const [projects] = useState({
    burgerBuilder: {
      isFirstElementOfTag: true,
      tag: 'javascript',
      title: 'Burger Builder',
      liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, Css',
      gitHubLink: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: `This app allows users to create and order their own customized burger.

       Functionalities include form validation, authentication, database management,
        automatic login and preservation of the users session.`,
      whatILearned: `This project was instrumental in developing an effective & efficient
       approach to learning. 
       Prior to this project a "well it works, so move on" mentality was costing me
       alot of technical debt, delays in progress and resulted in demotivation.
       I learned the importance of taking the time to really understand and dive deeper
       into difficult concepts instead of shying away when my head began to hurt. 
       I found taking notes and explaining outloud the problem and possible solutions
       greatly helped reinforce the lessons I was learning.`,
      technicalPractices: `Multiple approaches to Handling State, Authentication tokens 
        and localStorage, Asynchronous actions, Class-based components 
        and lifecycle hooks, Functional components and react hooks, 
        Higher order components, Database rules configuration`,
    },
    squarePlayground: {
      tag: 'javascript',
      title: 'Square Playground',
      liveDemoLink: 'https://square-playground.web.app/',
      previewTechStack: 'Javascript, React, Redux, Css, Html',

      gitHubLink: 'placeholder',
      description: `A slot machine game based on simple Math.random() logic.

       This was my first practice app diving into the world of javascript and React, the app was built mostly on guess work and google searches.`,
      whatILearned: `This project taught me the importance of how to effectively ask questions and find answers without burdening the people who were offering help with something I could have found out myself.
      
      An early build of this project was having major preformance issues caused by large image file sizes and complicated logic. While in persuit of a solution to the complicated logic, I was introduced to Big O notation which helped me to understand why and how to refactor the code.`,
      technicalPractices: 'Fundamentals of state and data management',
    },
    fitness: {
      isFirstElementOfTag: true,
      tag: 'python',
      title: 'Fitness',
      previewTechStack: 'Python, Tkinter, SQlite3',

      gitHubLink: 'https://github.com/Kwarn/fitness',
      description: `A light-weight MyFitnessPal clone, this app allows users to save their meal history and add new meals with their ingredients and calorie information to a SQlite database.`,
      whatILearned: ``,
      technicalPractices: 'Database queries',
    },
    fizzyLookup: {
      tag: 'python',
      title: 'Fizzy-Lookup',
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'placeholder',
      description: `Desktop App which allows easier searching of excel data.

        Built on request for a friend, this project allowed me demonstate and practice a real world use-case of what I had learned with Python, helping them to work more efficiently on what was previously a time consuming and teedious task.

        The app uses pandas (data analysis libary) to convert an excel spread-sheet to columns and rows displayed by tkinter (GUI libary).
        
        The excel spread-sheet contains property data such as rental price & number of bedrooms. The user can accurately search the data using a combination of 7 dropdown menus.`,
      whatILearned: `The importance of accurately communicating a description 
        of the clients needs so that unnecessary or miscommunicated functionality
        didn't waste development time.`,
      technicalPractices: 'System process access',
    },
    shutdownTimer: {
      tag: 'python',
      title: 'Shutdown Timer',
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'https://github.com/Kwarn/Fizzy-Lookup',
      description:
        'Desktop Application for converting pdf to searchable object',
      technicalPractices: 'System process access',
    },
  })

  let projectElements = []
  for (let project in projects) {
    projectElements.push(
      <FadeInSection key={project} fadeDirection="bottom">
        <Project
          firstElementRef={
            projects[project].isFirstElementOfTag
              ? firstElementRefs[projects[project].tag]
              : null
          }
          isSelectedContent={selectedContentTag === projects[project].tag}
          project={projects[project]}
        />
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
