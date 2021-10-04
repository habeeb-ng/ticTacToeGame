export default class GameView {
    constructor() {

    }
    updateBoard(game) {
        this.updateTurn(game);
        const winnigCombination = game.findWinningCombinations();
        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelectorAll('.board-tile')[i];
            tile.textContent = game.board[i];
            tile.classList.remove('winner')
            if (tile.textContent === 'X') {
                tile.classList.add('tile-x');
                tile.classList.remove('tile-o');
            } else {
                tile.classList.add('tile-o');
                tile.classList.remove('tile-x');
            }


            if (winnigCombination && winnigCombination.includes(i)) {
                tile.classList.add('winner');
                
            }
            
        }
        if (winnigCombination) {
            let right = document.querySelector('.right');
                let anounce = document.createElement('div');
                anounce.textContent = `The winner is Player ${tile.textContent}`;
                right.appendChild(anounce);
        }
        
    }
    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");
        if (game.turn === 'X') {
            playerX.classList.add('active')
            playerO.classList.remove('active')
        } else if(game.turn === 'O'){
            playerO.classList.add('active')
            playerX.classList.remove('active')
        }
    }

}