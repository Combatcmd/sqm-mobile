import * as ActionTypes from 'Actions/ActionTypes';

const initialState = {
  searchQuery: {
    sp: '',
    ep: '',
    city: null,
    rooms: null,
  },
};

export default filter = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_FILTER:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};
