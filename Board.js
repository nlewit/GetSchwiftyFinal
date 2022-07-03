class Board{
    constructor(num_rows){
        this.num_rows = num_rows
        this.used_nums = []
        this.num_limit = Math.pow(num_rows, 2) - 1
        this.board = []
    }

    get gameBoard(){

        for (let index = 0; index < this.num_rows; index++) {
            arr =[]
            for (let inside_index = 0; inside_index < this.num_rows; inside_index++) {
                addToList(arr)
            }

            this.board.push(arr)
        }

        return board
    }
//Note: Remember to deal with the 0 and not print it
    addToList(arr){
        let generated = 0

        do {
            generated = Math.floor(Math.random()*this.num_limit)
        } while(this.used_nums.includes(generated));

        console.log(generated)
        this.used_nums.push(generated)
        arr.push(generated)
    }
}