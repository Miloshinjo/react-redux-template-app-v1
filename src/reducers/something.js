export default (state = [], action) => {
  switch (action.type) {
    case 'GET_SOMETHING':
      return {
        something: action.something
      }
    default:
      return state
  }
}