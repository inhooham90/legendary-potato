import Game from './game.js';
import GameView from './game_view.js';

const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;
let ctx = canvasEl.getContext("2d");
let game = new Game(ctx);
new GameView(game).start();

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
window.frames = 0;
function keyDownHandler(e) {
    if (e.keyCode === 39) {
        e.preventDefault();
        window.rightPressed = true;
    } else if (e.keyCode === 37) {
        e.preventDefault();
        window.leftPressed = true;
    }

    if (e.keyCode === 68) {
        e.preventDefault();
        window.right = true;
    } else if (e.keyCode === 65) {
        e.preventDefault();
        window.left = true;
    }


}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        window.rightPressed = false;
    } else if (e.keyCode === 37) {
        window.leftPressed = false;
    }

    if (e.keyCode === 68) {
        e.preventDefault();
        window.right = false;
    } else if (e.keyCode === 65) {
        e.preventDefault();
        window.left = false;
    }
}
