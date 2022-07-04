import {Board} from "./Board.js"

export class ReversalCalculator{
    constructor(board, boardAsList, numRows){
        this.board = board
        this.boardAsList = boardAsList
        this.numRows = numRows
    }

    getNumReversals(){
        let totalReversals = 0
        for (let index = 0; index < this.boardAsList.length - 1; index++) {
            for (let compared = index + 1; compared < this.boardAsList.length; compared++) {
                if(this.boardAsList[index].identifier > this.boardAsList[compared].identifier){
                    totalReversals++
                }
            }
        }

        return totalReversals
    }

    getBlankSquareRow(){
        let rowIndex = 0
        let rowCounter = 0
        this.board.forEach(row => {
            row.forEach(square => {
                if(square.identifier == 0){
                    rowIndex = rowCounter + 1
                }
            });
            rowCounter++
        });

        return rowIndex
    }

    isSolvable(){
        let score = this.getNumReversals()

        if(this.numRows % 2 == 0){
            score += this.getBlankSquareRow()
        }
        return (score % 2 == 0)
    }
}

let board  = new Board(3)
let gameBoard = board.gameBoard()
let calculator = new ReversalCalculator(gameBoard, board.boardAsList, board.numRows)
console.log(calculator.isSolvable())