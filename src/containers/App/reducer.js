// import { fromJS } from 'immutable'

import {
  // GET_API_DATA,
  // GET_API_DATA_LOADED,
  // GET_API_DATA_ERROR,
  UPDATE_BOARD
} from './constants'

const initialState = {
  // apiData: null,
  // apiDataLoading: null,
  // apiDataLoaded: null,
  // apiDataError: null,
  boardData: [
    [0, 8, 0, 4, 0, 9, 0, 5, 0],
    [0, 0, 0, 6, 0, 0, 2, 1, 4],
    [5, 2, 0, 1, 0, 0, 9, 6, 0],
    [1, 6, 0, 7, 3, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 4, 6, 0, 8, 7],
    [0, 7, 5, 0, 0, 7, 0, 2, 6],
    [8, 1, 7, 0, 0, 2, 0, 0, 0],
    [0, 3, 0, 9, 0, 4, 0, 7, 0]
  ]
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOARD:
      return {
        ...state,
        boardData: action.boardData
      }
    // case GET_API_DATA:
    //   return state
    //     .set('apiDataLoading', true)
    //     .set('apiDataError', null)
    // case GET_API_DATA_LOADED:
    //   return state
    //     .set('apiData', action.data)
    //     .set('apiDataLoading', false)
    //     .set('apiDataLoaded', true)
    //     .set('apiDataError', null)
    // case GET_API_DATA_ERROR:
    //   return state
    //     .set('apiDataLoading', false)
    //     .set('apiDataLoaded', false)
    //     .set('apiDataError', action.error)
    default:
      return state
  }
}

export default appReducer
