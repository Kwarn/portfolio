import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/Utility'

const initalState = {
  projects: {
    burgerBuilder: {
      title: 'Burger Builder',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase',
      techStack:
        'JavaScript, React, React-Router, Redux, Redux-Saga, Axios, Firebase realtime database, Firebase Hosting',
      gitHub: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: 'Learned alot.',
    },
    SquarePlayground: {
      title: 'Square Playground',
      previewTechStack: 'Javascript, React, Redux',
      techStack: 'Javascript, React, Redux',
      gitHub: 'placeholder',
      description: 'Gambling game',
    },
    Fitness: {
      title: 'Fitness app',
      previewTechStack: 'Python, Tkinter, SQlite3',
      techStack: 'Python, Tkinter, SQlite3',
      gitHub: 'https://github.com/Kwarn/fitness',
      description: 'fitness app, learned lots',
    },
    shutdownTimer: {
      title: 'Shutdown Timer',
      previewTechStack: 'Python, tkinter',
      image: '',
      techStack: 'Python, tkinter',
      gitHub: 'placeholder',
      description:
        'Desktop Application for setting an automatic shutdown/reset/sleep time',
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
