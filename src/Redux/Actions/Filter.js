import * as ActionTypes from './ActionTypes'

export const setSearchQuery = data => {
  return {type: ActionTypes.SEARCH_FILTER, payload: data};
};
