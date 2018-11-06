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
  constructor(pos, char, player) {
    this.x = pos[0];
    this.y = pos[1];
    this.dy = 0;
    this.sx = 0;
    this.sy = 0;
    this.sh = 200;
    this.sw = 200;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.char = char;
    this.player = player;
    if(char === "TKD") {
      this.image.src = "./images/TKD.png";
      this.punch = { type:"punch", damage:5 };
      this.kick = { type:"kick", damage:10 };
      this.special = { type:"special", damage:25 };
      this.hp = 250;
    } else if (char === 'ninja'){
      this.image.src = "./images/ninja.png";
      this.punch = { type:"punch", damage:5 };
      this.kick = { type:"kick", damage:5 };
      this.special = { type:"special", damage:10 };
      this.hp = 200;
      this.double = false;
    } else {
      this.image.src = "./images/TKD.png";
      this.punch = { type:"punch", damage:5 };
      this.kick = { type:"kick", damage:20 };
      this.special = { type:"special", damage:25 };
      this.hp = 250;
    }
    this.jumping = false;
    this.punching = false;
    this.kicking = false;
    this.moving = false;
    this.frames = 0;
  }

  move(move){
    if (move === "right" && this.x < 650 && this.hp > 0) {
      this.x += 5;
    } else if (move === "left" && this.x > 180 && this.hp > 0) {
      this.x -= 5;
    }
    if (move === "punch") {
      this.frames = 100;
      this.punching = true;
    } else if (move === "kick") {
      this.frames = 200;
      this.kicking = true;
    }
  }

  jump() {
    if (this.y === 210 && !this.jumping && this.hp > 0) {
      this.dy = 6;
      this.kicking = false;
      this.punching = false;
      this.jumping = true;
      this.frames = 700;
    }
  }

  hit(attack) {
    switch (attack.type) {
      case "punch":
        this.frames = 400;
        this.hp -= attack.damage;
        if ( this.right ) {
          this.x += 1;
        } else {
          this.x -= 1;
        }
        break;
      case "kick":
        this.frames = 400;
        this.hp -= attack.damage;
        if ( this.right ) {
          this.x += 3;
        } else {
          this.x -= 3;
        }
        break;
      case "special":
        this.frames = 400;
        this.hp -= attack.damage;
        if ( this.right ) {
          this.x += 6;
        } else {
          this.x -= 6;
        }
      default:
        break;
    }
  }



  draw({ ctx, foe }) {
    // console.log("foe position", foePos);
    // console.log("char position", this.x);
    // console.log(this.hp)

    if (this.player === 1 && (window.rightPressed || window.leftPressed)) {
      this.moving = true;
    } else if (this.player === 2 && (window.right || window.left)) {
      this.moving = true;
    } else {
      this.moving = false;
    }
    this.frames += 5;
    if (this.frames < 40) {
      if (this.moving) {
        this.sy = 2200;
      } else {
        this.sy = 0;
      }
    } else if ( this.frames >= 40 && this.frames <= 80) {
      this.sy = 200;
      if (this.moving) {
        this.sy = 2400;
      } else {
        this.sy = 200;
      }
      if (this.frames === 80) {
        // this.sy = 0;
        this.frames = 0;
      }
    } else if (this.frames >= 100 && this.frames <= 110) {
      if (this.jumping) {
        this.sy = 1800;
      } else {
        this.sy = 400;
      }
      if (this.frames === 110 &&
        Math.abs(this.x - foe.x) < 60 &&
        Math.abs(this.y - foe.y) < 30 && this.hp > 0) {
        foe.hit(this.punch);
        window.punch.play();
      }
      if (this.frames === 110) {
        this.frames = 0;
      }
    } else if (this.frames > 1030 && this.frames < 1500) {
      this.sy = 0;
      this.frames = 0;
    } else if (this.frames >= 400 && this.frames <= 430) {
      this.sy = 1400;
      if (this.frames === 430) {
        this.frames = 0;
      }
    } else if (this.frames > 200 && this.frames <= 220) {
      if (this.jumping) {
        this.sy = 2000;
      } else {
        this.sy = 800;
      }
      if (this.frames === 210 &&
        Math.abs(this.x - foe.x) < 60 &&
        Math.abs(this.y - foe.y) < 80  && this.hp > 0) {
        foe.hit(this.kick);
        window.kick.play();
      }
    } else if (this.frames > 220 && this.frames <= 230) {
      this.sy = 1000;
      if (this.frames === 230) {
        this.frames = 0;
      }
    } else if (this.frames >= 700 && this.frames < 800 && this.jumping) {
      // if (this.punching) {
      //   this.sy = 1800;
      // } else if (this.kicking) {
      //   this.sy = 2000;
      // } else {
        this.sy = 1600;
      // }
    } else {
      this.frames = 0;
      this.punching = false;
      this.kicking = false;
    }

    this.sx = this.x > foe.x ? 200 : 0;
    this.right = this.x > foe.x ? true : false;

    if (this.y < 120) {
      this.dy = -7;
    } else if (this.y > 210 && this.jumping) {
      this.frames = 0;
      this.dy = 0;
      this.y = 210;
      this.jumping = false;
    }
    this.y -= this.dy;
    if (this.hp <= 0) {
      this.sy = 2575;
    }
    // if (this.player === 2) {console.log(moving)}
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
  }
}


/***/ }),

/***/ "./lib/features/healthbar.js":
/*!***********************************!*\
  !*** ./lib/features/healthbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Health; });
class Health {
  constructor(pos, hp) {
    this.x = pos[0];
    this.y = pos[1];
    this.width = 300;
    this.max = hp;
    this.height = 30;
  }

  draw({ ctx, healthbar }) {
    ctx.beginPath();
    let hp = this.width * (healthbar/this.max) > 0 ? this.width * (healthbar/this.max) : 0;
    ctx.rect(this.x, this.y, hp, this.height);
    ctx.fillStyle = hp < 50 ? "#f44242" : hp > 175 ? "#0095DD" : "#ffff19"
    ctx.fill();
    ctx.closePath();
  }
}


/***/ }),

/***/ "./lib/features/middle.js":
/*!********************************!*\
  !*** ./lib/features/middle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Middle; });
class Middle {
  constructor() {
    this.image = new Image();
    this.image.src = './images/gauge.png';
  }

  draw(ctx) {
    ctx.drawImage(this.image, 326, 10, 150, 100);
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
/* harmony import */ var _features_healthbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/healthbar.js */ "./lib/features/healthbar.js");
/* harmony import */ var _features_middle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/middle.js */ "./lib/features/middle.js");






class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.potatoOne = null;
    this.potatoTwo = null;
    this.hpOne = null;
    this.hpTwo = null;
    this.level = 'one';
    if (this.level === 'one') {
      this.stage = new _levels_levelone_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    } else if (this.level === 'two') {
      this.stage = new _levels_leveltwo_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
    this.middle = new _features_middle_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  addPotatoOne() {
    this.potatoOne = new _characters_potatoes_js__WEBPACK_IMPORTED_MODULE_0__["default"]([180, 210], 'TKD', 1);
    return this.potatoOne;
  }

  addPotatoTwo() {
    this.potatoTwo = new _characters_potatoes_js__WEBPACK_IMPORTED_MODULE_0__["default"]([600, 210], 'ninja', 2);
    return this.potatoTwo;
  }

  addHPOne() {
    this.hpOne = new _features_healthbar_js__WEBPACK_IMPORTED_MODULE_3__["default"]([50, 30], this.potatoOne.hp);
    return this.hpOne;
  }

  addHPTwo() {
    this.hpTwo = new _features_healthbar_js__WEBPACK_IMPORTED_MODULE_3__["default"]([450, 30], this.potatoTwo.hp);
    return this.hpTwo;
  }

  play() {
    window.frames += 1;
    this.ctx.clearRect(0, 0, 800, 600);
    this.stage.draw(this.ctx);
    this.hpOne.draw({ ctx: this.ctx, healthbar: this.potatoOne.hp })
    this.hpTwo.draw({ ctx: this.ctx, healthbar: this.potatoTwo.hp })
    this.potatoOne.draw({ ctx: this.ctx, foe: this.potatoTwo });
    this.potatoTwo.draw({ ctx: this.ctx, foe: this.potatoOne });
    this.middle.draw(this.ctx)
    if (window.rightPressed) {
      this.potatoOne.move("right");
    } else if (window.leftPressed) {
      this.potatoOne.move("left");
    } else if (window.onePunch) {
      this.potatoOne.move("punch");
    } else if (window.oneKick) {
      this.potatoOne.move("kick");
    }
    if (window.jumpPressed) {
      this.potatoOne.jump();
    }

    if (window.right) {
      this.potatoTwo.move("right");
    } else if (window.left) {
      this.potatoTwo.move("left");
    } else if (window.twoPunch) {
      this.potatoTwo.move("punch");
    } else if (window.twoKick) {
      this.potatoTwo.move("kick");
    }
    if (window.jump) {
      this.potatoTwo.jump();
    }


    // if (!this.potatoOne.hp || !this.potatoTwo.hp) {
    //   this.level === "one" ? this.level === "two" : this.over();
    // };

    // if (this.potatoOne.hp < 0) {
    //   console.log('Player 2 wins!')
    // } else if (this.potatoTwo.hp < 0) {
    //   console.log('Player 1 wins!')
    // }
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
        this.hpOne = this.game.addHPOne();
        this.hpTwo = this.game.addHPTwo();
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
    this.frames += 5;
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map