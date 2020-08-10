import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/Utility'
import { validateInput } from '../../shared/validation'

const initalState = {
  inputForm: {
    name: {
      validation: {
        required: true,
        minLength: 2,
      },
      isValid: false,
      value: '',
    },
    email: {
      validation: {
        required: true,
        isEmail: true,
      },
      isValid: false,
      value: '',
    },
    textBox: {
      validation: {
        required: true,
        minLength: 10,
      },
      isValid: false,
      value: '',
    },
  },
}

const inputChangedHandler = (state, action) => {
  const updatedInputElement = updateObject(state.inputForm[action.identifier], {
    value: action.value,
    isValid: validateInput(
      action.value,
      state.inputForm[action.identifier].validation
    ),
  })

  const updatedInputForm = updateObject(state.inputForm, {
    [action.identifier] : updatedInputElement
  })
  return updateObject(state, { inputForm: updatedInputForm })
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGED_HANDLER:
      return inputChangedHandler(state, action)
    default:
      return state
  }
}

export default reducer
