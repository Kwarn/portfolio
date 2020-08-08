import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/Utility'

const initalState = {
  projects: {
    burgerBuilder: {
      title: 'Burger Builder',
      techStack:
        'JavaScript, React, React-Router, Redux, Redux-Saga, Axios, Firebase realtime database, Firebase Hosting',
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
    SquarePlayground: {
      title: 'Square Playground',
      techStack: 'Javascript, React, Redux',
      gitHub: 'placeholder',
      description: 'Gambling game',
    },
  },
  fullProject: null,
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
