import {
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
  UPDATE_BOARD
} from './constants';

export const updateBoard = (data) => ({
  type: UPDATE_BOARD,
  data
});

export const getAPIData = () => ({
  type: GET_API_DATA,
});

export const getAPIDataLoaded = (data) => ({
  type: GET_API_DATA_LOADED,
  data,
});

export const getAPIDataError = (error) => ({
  type: GET_API_DATA_ERROR,
  error,
});
