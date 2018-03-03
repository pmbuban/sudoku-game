import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAPIData } from './actions'
// import { selectApiData } from './selectors'
// import { selectBoardData } from './selectors'

// import Block from '../../components/block'
import Board from '../../components/board'

class App extends Component {
  componentWillMount() {
    console.log('this.props >>', this.props)
    this.props.actions.getAPIData()
  }

  render() {
    const boardProps = {
      data: this.props.boardData
    }

    return (
      <div className="app">
        <div className="app-header">
          <h2>Sudoku</h2>
        </div>
        <div className="board-container">
          here we go

          <div>
            test
            <Board {...boardProps} />
          </div>
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  // apiData: {},
  boardData: []
}

App.propTypes = {
  // apiData: PropTypes.object,
  actions: PropTypes.object.isRequired,
  boardData: PropTypes.array
}

// const mapStateToProps = (state) => ({
const mapStateToProps = (state) => {
  console.log('state', state.containers.appReducer.boardData)
  return ({
    boardData: state.containers.appReducer.boardData,
  })
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
