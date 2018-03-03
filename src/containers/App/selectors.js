export const selectAppContainer = (state) => state.containers.appReducer

// Need to use .get, beucase reducer defaulState was created by using ImmutableJS
export const selectApiData = (state) => selectAppContainer(state).get('apiData')
// export const selectBoardData = (state) => selectAppContainer(state).get('boardData')
