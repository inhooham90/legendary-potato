import Potato from './characters/potatoes.js';
import LevelOne from './levels/levelone.js';
import LevelTwo from './levels/leveltwo.js';
import Health from './features/healthbar.js';
import Middle from './features/middle.js';

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.potatoOne = null;
    this.potatoTwo = null;
    this.hpOne = null;
    this.hpTwo = null;
    this.level = 'one';
    if (this.level === 'one') {
      this.stage = new LevelOne();
    } else if (this.level === 'two') {
      this.stage = new LevelTwo();
    }
    this.middle = new Middle();
  }

  addPotatoOne() {
    this.potatoOne = new Potato([180, 210], 'TKD', 1);
    return this.potatoOne;
  }

  addPotatoTwo() {
    this.potatoTwo = new Potato([600, 210], 'ninja', 2);
    return this.potatoTwo;
  }

  addHPOne() {
    this.hpOne = new Health([50, 30], this.potatoOne.hp);
    return this.hpOne;
  }

  addHPTwo() {
    this.hpTwo = new Health([450, 30], this.potatoTwo.hp);
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
