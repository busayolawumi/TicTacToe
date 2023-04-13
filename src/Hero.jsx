import React, { useState } from 'react'
import Square from './Square'

const Hero = () => {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [player, setPlayer] = useState("X")

    const chooseSquare = (square) => {
        setBoard(board.map((val, idx) => {
            if(idx == square && val == ""){
                return player
            }

            return val;
        }))
    }
    
  return (
    <div className='App'>
        <div className="board">
            <div className="row">
                <Square val={board[0]} chooseSquare={() => {() => chooseSquare(0)}}/>
                <Square val={board[1]} chooseSquare={() => {() => chooseSquare(1)}}/>
                <Square val={board[2]} chooseSquare={() => {() => chooseSquare(2)}}/>
            </div>
            <div className="row">
                {/* <Square val={board[0]} chooseSquare={() => {() => chooseSquare(3)}}/>
                <Square val={board[1]} chooseSquare={() => {() => chooseSquare(4)}}/>
                <Square val={board[2]} chooseSquare={() => {() => chooseSquare(5)}}/> */}
            </div>
            <div className="row">
                {/* <Square val={board[0]} chooseSquare={() => {() => chooseSquare(6)}}/>
                <Square val={board[1]} chooseSquare={() => {() => chooseSquare(7)}}/>
                <Square val={board[2]} chooseSquare={() => {() => chooseSquare(8)}}/> */}
            </div>
            
        </div>
    </div>
  )
}

export default Hero