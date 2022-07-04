import {Square} from "./Square.js"

export class Board{
    constructor(numRows){
        this.numRows = numRows
        this.usedIdentifiers = []
        this.numLimit = Math.pow(numRows, 2)
        this.board = []
        this.isNumberBoard = true
        this.boardAsList = []
        this.zeroSqaure = {}
    }

 /*   constructor(num_rows, identifiers){
         this.num_rows = num_rows
         this.identifiers = identifiers
         this.used_identifiers = identifiers.keys()
         this.num_limit = Math.pow(num_rows, 2) - 1
         this.board = []
         this.isNumberBoard = false
     } */

    //Note: Remember to deal with the 0 and not print it
    addToList(arr){
        let generated = 0
        let square = {}
        do {
            generated = Math.floor(Math.random()*this.numLimit)
        } while(this.usedIdentifiers.includes(generated));

        console.log(generated)
        this.usedIdentifiers.push(generated)
        if(this.isNumberBoard){
            square = new Square(generated)
        } else {
            square = new Square({identifier : generated, data : this.identifiers[generated]})
        }

        if(generated != 0){
            this.boardAsList.push(square)
        } else {
            this.zeroSqaure = square
        }

        arr.push(square)
    }

    gameBoard(){

        for (let index = 0; index < this.numRows; index++) {
            let arr =[]
            for (let inside_index = 0; inside_index < this.numRows; inside_index++) {
                this.addToList(arr)
            }

            this.board.push(arr)
        }
        return this.board
    }
}