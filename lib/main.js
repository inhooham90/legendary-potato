import Game from './game.js';
import GameView from './game_view.js';

const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;
let ctx = canvasEl.getContext("2d");
let game;
game = new Game(ctx);
new GameView(game, ctx).start();
