import { getSomething } from '../utils/api'

// ACTION
export const getSomethingAction = (something) => ({
  type: 'GET_SOMETHING',
  something
})

// ASYNC ACTION (used with redux-thunk)
export const startgetSomethingAction = () => {
  return (dispatch) => {

    return getSomething().then((array) => {
        dispatch(getSomethingAction(array))
    })
  }
}