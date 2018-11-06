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

const snd = new Audio("./audio/bg.mp3");
snd.addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
}, false);
snd.play();

window.punch = new Audio("./audio/punch.mp3");
window.kick = new Audio("./audio/kick.mp3");

let heldKeys = {};
function keyDownHandler(e) {
    if (e.keyCode === 39) {
        e.preventDefault();
        window.right = true;
    } else if (e.keyCode === 37) {
        e.preventDefault();
        window.left = true;
    }

    if (e.keyCode === 38) {
      e.preventDefault();
      if (heldKeys[e.keyCode]) {
        window.jump = false;
      } else {
        window.jump = true;
      }
      heldKeys[e.keyCode] = true;
    }

    if (e.keyCode === 188) {
        e.preventDefault();
        if (heldKeys[e.keyCode]) {
          window.twoKick = false;
        } else {
          window.twoKick = true;
        }
        heldKeys[e.keyCode] = true;
    } else if (e.keyCode === 190) {
        e.preventDefault();
        if (heldKeys[e.keyCode]) {
          window.twoPunch = false;
        } else {
          window.twoPunch = true;
        }
        heldKeys[e.keyCode] = true;
    }

    if (e.keyCode === 68) {
        e.preventDefault();
        window.rightPressed = true;
    } else if (e.keyCode === 65) {
        e.preventDefault();
        window.leftPressed = true;
    }

    if (e.keyCode === 87) {
      e.preventDefault();
      if (heldKeys[e.keyCode]) {
        window.jumpPressed = false;
      } else {
        window.jumpPressed = true;
      }
      heldKeys[e.keyCode] = true;
    }

    if (e.keyCode === 67) {
        e.preventDefault();
        if (heldKeys[e.keyCode]) {
          window.oneKick = false;
        } else {
          window.oneKick = true;
        }
        heldKeys[e.keyCode] = true;
    } else if (e.keyCode === 86) {
        e.preventDefault();
        if (heldKeys[e.keyCode]) {
          window.onePunch = false;
        } else {
          window.onePunch = true;
        }
        heldKeys[e.keyCode] = true;
    }

    if (e.keyCode === 80) {
      e.preventDefault();
      if (snd.paused) {
          snd.play();
      } else {
          snd.pause();
      }
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

    if (e.keyCode === 188) {
        e.preventDefault();
        window.twoKick = false;
        delete heldKeys[e.keyCode];
    } else if (e.keyCode === 190) {
        e.preventDefault();
        window.twoPunch = false;
        delete heldKeys[e.keyCode];
    }

    if (e.keyCode === 67) {
        e.preventDefault();
        window.oneKick = false;
        delete heldKeys[e.keyCode];

    } else if (e.keyCode === 86) {
        e.preventDefault();
        window.onePunch = false;
        delete heldKeys[e.keyCode];
    }

    if (e.keyCode === 38) {
        e.preventDefault();
        window.jump = false;
        delete heldKeys[e.keyCode];

    }

    if (e.keyCode === 87) {
        e.preventDefault();
        window.jumpPressed = false;
        delete heldKeys[e.keyCode];
    }

}
