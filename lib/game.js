import Potato from './characters/potatoes.js';
import LevelOne from './levels/levelone.js';
import LevelTwo from './levels/leveltwo.js';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.potatoOne = null;
    this.potatoTwo = null;
    this.level = 'one';
    if (this.level === 'one') {
      this.stage = new LevelOne();
    } else if (this.level === 'two') {
      this.stage = new LevelTwo();
    }
  }

  addPotatoOne() {
    this.potatoOne = new Potato([50, 250], 'TKD');
    return this.potatoOne;
  }

  addPotatoTwo() {
    this.potatoTwo = new Potato([600, 250], 'TKD');
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
