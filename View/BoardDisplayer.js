import { Board } from "../Model/Board.js";

export class BoardDisplayer{

    displayBoard(board){
        for (let row = 0; row < board.length; row++) {
            for (let square = 0; square < board[row].length; square++) {
                this.createButton(board[row][square].identifier)
            }
            
        }
    }

    createButton(button_display){
        let btn = document.createElement("button")
        btn.innerHTML = button_display
        btn.type = "button"
        btn.onclick = function () {
            alert("Button is clicked");
        };

        document.body.appendChild(btn);
    }
}
let board = new Board(3)
let gameBoard = board.gameBoard()
let displayer = new BoardDisplayer()
displayer.displayBoard(gameBoard)