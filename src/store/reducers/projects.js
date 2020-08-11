import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/Utility'

const initalState = {
  projects: {
    burgerBuilder: {
      title: 'Burger Builder',
      liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, Css',
      gitHubLink: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description:
        "This app allows users to create and order their own customized burger. Features include authentication, user's order history, automatic login and preservation of the users session. ",
      lessons:
        'Multiple approaches to Handling State, Authentication tokens and localStorage, Asynchronous actions, Class-based components and lifecycle hooks, Functional components and react hooks, Higher order components, Form validation, Database rules configuration',
    },
    SquarePlayground: {
      title: 'Square Playground',
      previewTechStack: 'Javascript, React, Redux, Css, Html',

      gitHubLink: 'placeholder',
      description: 'Gambling game',
      lessons: '',
    },
    Fitness: {
      title: 'Fitness app',
      previewTechStack: 'Python, Tkinter, SQlite3',

      gitHubLink: 'https://github.com/Kwarn/fitness',
      description: 'fitness app, learned lots',
      lessons: '',
    },
    shutdownTimer: {
      title: 'Shutdown Timer',
      previewTechStack: 'Python, tkinter',
      image: '',

      gitHubLink: 'placeholder',
      description:
        'Desktop Application for setting an automatic shutdown/reset/sleep time',
      lessons: '',
    },
  },
  fullProject: 'burgerBuilder',
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_FULL_PROJECT:
      return updateObject(state, { fullProject: action.projectId })
    default:
      return state
  }
}

export default reducer
