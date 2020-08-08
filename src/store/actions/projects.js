import * as actionTypes from '../actions/actionTypes'

export const switchFullProject = projectId => {
  return {
    type: actionTypes.SWITCH_FULL_PROJECT,
    projectId: projectId
  }
}