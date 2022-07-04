import { Board } from "../Model/Board.js";
import { ReversalCalculator } from "../Model/ReversalCalculator.js";
import { BoardDisplayer } from "../View/BoardDisplayer.js";
import { Interactor } from "../View/Interactor.js";
import { ActionManager } from "./ActionManager.js";

export class Bootstrapper{
    bootstrap(){
        let interactor = new Interactor()
        let board = new Board(interactor.interact("Please enter the number of rows you would like"))
        let gameBoard = board.gameBoard()
        let calculator = new ReversalCalculator(board.numRows)
        while(! calculator.isSolvable(gameBoard, board.boardAsList)){
            gameBoard = board.gameBoard()
        }
        //let manager = new ActionManager(board)
        let displayer = new BoardDisplayer()
        displayer.displayBoard(gameBoard)
        console.log(isSolvable(gameBoard, boardAsList))
    }
}

let boot = new Bootstrapper()
boot.bootstrap()