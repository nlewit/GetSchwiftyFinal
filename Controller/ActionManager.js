import {Board} from "../Model/Board.js"
import {Square} from "../Model/Square.js"

export class ActionManager{
    constructor(board){
        this.board = board
    }

    findIndices(square){
        let compSquare = {}
        for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
            for (let squareIndex = 0; squareIndex < this.board[0].length; squareIndex++) {
                compSquare = this.board[rowIndex][squareIndex]
               if(compSquare.identifier == square.identifier){
                   return {row : rowIndex, column : squareIndex}
               }
            }
        }
       return {row : 0, column : 0}
    }

    isSquareInRange(squareIndices){
        let zeroIndices = this.findIndices(new Square(0))
        let rowDiff = Math.abs(squareIndices.row - zeroIndices.row)
        let colDiff = Math.abs(squareIndices.column - zeroIndices.column)
        let isInRange = false

        if(rowDiff <= 1 && colDiff < 1){
            isInRange = true
        } else if(rowDiff < 1 && colDiff <= 1){
            isInRange = true
        }

        return isInRange
    }

    switch(squareIndices, zeroIndices){
        let temp = this.board[squareIndices.row][squareIndices.column]
        this.board[squareIndices.row][squareIndices.column] = this.board[zeroIndices.row][zeroIndices.column]
        this.board[zeroIndices.row][zeroIndices.column] = temp
        console.log("switched")
        return board
    }

    onClickAction(sqaure){
        let squareIndices = this.findIndices(sqaure)
        if(this.isSquareInRange(squareIndices)){
            let zeroIndices = this.findIndices(new Square(0))
            this.board = this.switch(squareIndices, zeroIndices)
        }

        return this.board
    }
}
