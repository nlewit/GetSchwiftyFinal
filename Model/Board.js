import {Square} from "./Square.js"

class Board{
    constructor(num_rows){
        this.num_rows = num_rows
        this.used_identifiers = []
        this.num_limit = Math.pow(num_rows, 2)
        this.board = []
        this.isNumberBoard = true
    }

 /*   constructor(num_rows, identifiers){
   //      this.num_rows = num_rows
  //       this.identifiers = identifiers
    //     this.used_identifiers = identifiers.keys()
   //      this.num_limit = Math.pow(num_rows, 2) - 1
   //      this.board = []
  //       this.isNumberBoard = false
     } */

    //Note: Remember to deal with the 0 and not print it
    addToList(arr){
        let generated = 0
        let square = {}
        do {
            generated = Math.floor(Math.random()*this.num_limit)
        } while(this.used_identifiers.includes(generated));

        console.log(generated)
        this.used_identifiers.push(generated)
        if(this.isNumberBoard){
            square = new Square(generated)
        } else {
            square = new Square({identifier : generated, data : this.identifiers[generated]})
        }
        arr.push(square)
    }

    gameBoard(){

        for (let index = 0; index < this.num_rows; index++) {
            let arr =[]
            for (let inside_index = 0; inside_index < this.num_rows; inside_index++) {
                this.addToList(arr)
            }

            this.board.push(arr)
        }
        console.log("Finished")
        return board
    }
}

let board  = new Board(3)
let gameBoard = board.gameBoard()
console.log(gameBoard)