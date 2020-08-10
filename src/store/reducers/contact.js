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

const inputValidation = (state, action) => {
  const isValid = validateInput(
    action.value,
    state.inputForm[action.inputIdentifier].validation
  )
  const updatedInputForm = updateObject(state.inputForm, {
    ...state.inputForm[action.inputIdentifier].validation,
    [action.inputIdentifier]: isValid,
    value: action.value,
  })
  updateObject(state, updatedInputForm)
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGED_HANDLER:
      return inputValidation(state, action)
    default:
      return state
  }
}

export default reducer
