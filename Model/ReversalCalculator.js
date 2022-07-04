export class ReversalCalculator{
    constructor(numRows){
        this.numRows = numRows
    }

    getNumReversals(boardAsList){
        let totalReversals = 0
        for (let index = 0; index < boardAsList.length - 1; index++) {
            for (let compared = index + 1; compared < boardAsList.length; compared++) {
                if(boardAsList[index].identifier > boardAsList[compared].identifier){
                    totalReversals++
                }
            }
        }

        return totalReversals
    }

    getBlankSquareRow(board){
        let rowIndex = 0
        let rowCounter = 0
        board.forEach(row => {
            row.forEach(square => {
                if(square.identifier == 0){
                    rowIndex = rowCounter + 1
                }
            });
            rowCounter++
        });

        return rowIndex
    }

    isSolvable(board, boardAsList){
        let score = this.getNumReversals(boardAsList)

        if(this.numRows % 2 == 0){
            score += this.getBlankSquareRow(board)
        }
        return (score % 2 == 0)
    }
}