import * as ActionTypes from 'Actions/ActionTypes';

const initialState = {
  apartments: {
    data: [],
    links: {
      self: 'http://sqm.kz/api/apartments',
    },
    meta: {
      count: 0,
    },
    jsonapi: {
      version: '1.0',
    },
  },
};

export default apartments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_APARTMENTS_SUCCEEDED:
      return {
        ...state,
        apartments: action.payload,
      };
    default:
      return state;
  }
};
