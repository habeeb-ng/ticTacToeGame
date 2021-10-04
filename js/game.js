
export default class Game{ // here we exported the Game class to. class is like an object creator
    constructor() {
        console.log('init game')
        this.turn = 'X'
        this.board = new Array(9).fill(null)// here we created a new array, and set all its properties to null
    }
    nextTurn() { //this is a function
        if (this.turn == "X") {
            this.turn = "O"
        } else {
            this.turn = "X"
        }
    }
    makeMove(i) {
        if (this.endOfGame()) {
            return; //stops the make move or stops the function
        }
        if (this.board[i]) { // thid means if there is something in that index
            return; // stop
        }
        this.board[i] = this.turn;

        let winnigCombination = this.findWinningCombinations();
        if (!winnigCombination) {
            this.nextTurn()
        }
    }
    findWinningCombinations() {
        const winningCombinations = [ //its properties are nested arrays
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]
        for (const combination of winningCombinations) { //combination is each of the nested array
            // for (let position of combination) {
                
            // } 
            const [a, b, c] = combination; // here we are distructuring each array in the winningCombination array
            //do something with this.board
            if (this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination
            }
        }
        return null;
    }

    endOfGame() {
        let winningCombination = this.findWinningCombinations()
        if (winningCombination) { //this means if the winning combination doesn't return null it is set to true
            return true;
        } else {
            return false
        }
    }
}

