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
        window.right = true;
    } else if (e.keyCode === 37) {
        e.preventDefault();
        window.left = true;
    }

    if (e.keyCode === 188) {
        e.preventDefault();
        window.right = false;
        window.left = false;
        window.twoKick = true;
        setTimeout(function(){ window.twoKick = false }, 70);
    } else if (e.keyCode === 190) {
        e.preventDefault();
        window.right = false;
        window.left = false;
        window.twoPunch = true;
        setTimeout(function(){ window.twoPunch = false }, 30)
    }

    if (e.keyCode === 68) {
        e.preventDefault();
        window.rightPressed = true;
    } else if (e.keyCode === 65) {
        e.preventDefault();
        window.leftPressed = true;
    }

    if (e.keyCode === 67) {
        e.preventDefault();
        window.rightPressed = false;
        window.leftPressed = false;
        window.oneKick = true;
        setTimeout(function(){ window.oneKick = false }, 70);
    } else if (e.keyCode === 86) {
        e.preventDefault();
        window.rightPressed = false;
        window.leftPressed = false;
        window.onePunch = true;
        setTimeout(function(){ window.onePunch = false }, 30)
    }


}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        window.right = false;
    } else if (e.keyCode === 37) {
        window.left = false;
    }


    if (e.keyCode === 68) {
        e.preventDefault();
        window.rightPressed = false;
    } else if (e.keyCode === 65) {
        e.preventDefault();
        window.leftPressed = false;
    }

}
