const INITIAL_STATE = {
  showDetails: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_DETAILS':
      return {
        ...state,
        showDetails: {
          ...state.showDetails,
          [action.question]: action.val,
        }
      }
    default:
      return state;
  }
}