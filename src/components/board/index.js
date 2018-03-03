import React from 'react'
import Block from '../block'

const Board = (props) => {
  console.log('Board Props', props)

  return (
    <div className="board-container">
      <Block />
    </div>
  )
}

export default Board
