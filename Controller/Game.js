export class Game{
    constructor(board, manager, displayer, calculator){
        this.board = board
        this.manager = manager
        this.displayer = displayer
        this.calculator = calculator
    }

    run(){
        while(this.calculator.getNumReversals(this.board.boardAsList) !== 0){
            //listen for click
            this.board.board = manager.onClickAction(result)
            //modify list to fit the new board
        }
    }

}