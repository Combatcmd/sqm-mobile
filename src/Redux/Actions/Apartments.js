import * as ActionTypes from './ActionTypes'

export const fetchApartmentsSucceeded = data => {
  return {type: ActionTypes.FETCH_APARTMENTS_SUCCEEDED, payload: data};
};

export const fetchApartmentsFailed = payload => {
  return {type: ActionTypes.FETCH_APARTMENTS_FAILED, payload: data};
};
