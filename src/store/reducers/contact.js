import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/Utility'

const initalState = {
  
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