const INITIAL_STATE = {
  data: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}