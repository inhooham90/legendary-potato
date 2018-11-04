/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/characters/potatoes.js":
/*!************************************!*\
  !*** ./lib/characters/potatoes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Potato; });
class Potato {
  constructor(pos, char) {
    this.x = pos[0];
    this.y = pos[1];
    this.sx = 0;
    this.sy = 0;
    this.sh = 200;
    this.sw = 200;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.char = char;
    if(char === "TKD") {
      this.image.src = "./images/TKD.png";
    } else {
      this.image.src = "./images/TKD.png";
    }
    this.frames = 0;
  }

  move(direction){
    if (direction === "right" && this.x < 650) {
      this.x += 2;
    } else if (direction === "left" && this.x > 100) {
      this.x -= 2;
    }
  }

  fall() {
    if (this.grounded === false) {
        this.dy = -10;
    }
  }

  draw({ ctx, foePos }) {
    console.log("foe position", foePos)
    console.log("char position", this.x)
    this.frames += 1;
    switch (this.frames) {
            case 0:
                this.sy = 0;
                break;
            case 60:
                this.sy = 200;
                break;
            case 120:
                this.frames = 0;
                break;
            default:
                break;
        }
    if (foePos <= this.x) {
      this.sx = 200;
    } else {
      this.sx = 0;
    }
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
  }
}


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _characters_potatoes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/potatoes.js */ "./lib/characters/potatoes.js");
/* harmony import */ var _levels_levelone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/levelone.js */ "./lib/levels/levelone.js");
/* harmony import */ var _levels_leveltwo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels/leveltwo.js */ "./lib/levels/leveltwo.js");




class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.potatoOne = null;
    this.potatoTwo = null;
    this.level = 'one';
    if (this.level === 'one') {
      this.stage = new _levels_levelone_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } else if (this.level === 'two') {
      this.stage = new _levels_leveltwo_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }

  addPotatoOne() {
    this.potatoOne = new _characters_potatoes_js__WEBPACK_IMPORTED_MODULE_0__["default"]([50, 250], 'TKD');
    return this.potatoOne;
  }

  addPotatoTwo() {
    this.potatoTwo = new _characters_potatoes_js__WEBPACK_IMPORTED_MODULE_0__["default"]([600, 250], 'TKD');
    return this.potatoTwo;
  }

  play() {
    window.frames += 1;
    this.ctx.clearRect(0, 0, 800, 600);
    this.stage.draw(this.ctx);
    this.potatoOne.draw({ ctx: this.ctx, foePos: this.potatoTwo.x });
    this.potatoTwo.draw({ ctx: this.ctx, foePos: this.potatoOne.x });
    if (window.rightPressed) {
      this.potatoOne.move("right");
    } else if (window.leftPressed) {
      this.potatoOne.move("left");
    }
    if (window.right) {
      this.potatoTwo.move("right");
    } else if (window.left) {
      this.potatoTwo.move("left");
    }


  }

}


/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

class GameView {
    constructor(game) {
        this.game = game;
        this.potatoOne = this.game.addPotatoOne();
        this.potatoTwo = this.game.addPotatoTwo();
    }

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        this.game.play();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    }
}

module.exports = GameView;


/***/ }),

/***/ "./lib/levels/levelone.js":
/*!********************************!*\
  !*** ./lib/levels/levelone.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelOne; });
class LevelOne {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/one.png";
    this.width = 800;
    this.height = 600;
    this.dx = 0;
    this.dy = 0;
    this.sx = 0;
    this.sy = 0;
    this.sh = 600;
    this.sw = 800;
    this.opened = false;
    this.frames = 0;
  }

  draw(ctx) {
    this.frames += 1;
    switch (this.frames) {
            case 0:
                this.sy = 0;
                break;
            case 30:
                this.sy = 600;
                break;
            case 60:
                this.sy = 1200;
                break;
            case 90:
                this.sy = 0;
                break;
            case 120:
                this.sy = 600;
                break;
            case 150:
                this.sy = 1200;
                break;
            case 180:
                this.sy = 0;
                this.frames = 0;
                break;
            default:

                break;
        }
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.width, this.height);
  }
}


/***/ }),

/***/ "./lib/levels/leveltwo.js":
/*!********************************!*\
  !*** ./lib/levels/leveltwo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelTwo; });
class LevelTwo {
  constructor(pos) {
    this.x = pos[0];
    this.y = pos[1];
    this.falling = false;
    this.dy = this.falling ? -5 : 0;
    this.width = 200;
    this.height = 200;
    this.image = new Image();
    this.image.src = "./images/cute_potato.png"
    this.frame = 0;
  }

  move(direction){
    if (direction === "right" && this.x < 650) {
      this.x += 5;
    } else if (direction === "left" && this.x > 100) {
      this.x -= 5;
    }
  }

  jump(){
    if (this.dy > 0) {
        this.dy -= 10;
    }
  }

  fall() {
    if (this.grounded === false) {
        this.dy = -10;
    }
  }

  draw(ctx) {
    this.x += this.dx;
    this.y -= this.dy;
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
  }
}


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view.js */ "./lib/game_view.js");
/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_view_js__WEBPACK_IMPORTED_MODULE_1__);



const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 800;
canvasEl.height = 600;
let ctx = canvasEl.getContext("2d");
let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
new _game_view_js__WEBPACK_IMPORTED_MODULE_1___default.a(game).start();

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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map