import * as actionTypes from '../actions/actionTypes'

export const inputChangedHandler = (event, elementIdentifier) => {
  return {
    type: actionTypes.INPUT_CHANGED_HANDLER,
    value: event.target.value,
    identifier: elementIdentifier
  }
}