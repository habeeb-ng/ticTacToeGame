import Game from "./game.js" // here we are importing a class from game.js, and we have to this current file type to mudule
import GameView from "./GameView.js"; // same thing happened here

let game = new Game(); //game is an object constructed from import
let gameView = new GameView();

const tiles = document.querySelectorAll('.board-tile');
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        console.log(tile.dataset.index)
        onTileClick(tile.dataset.index)// here
    })
})


function onTileClick(i) {
    //make a move
    game.makeMove(i);
    //change turn 
    //update board
    gameView.updateBoard(game)
}

const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
    onRestart()
})

function onRestart() {
    game = new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game)