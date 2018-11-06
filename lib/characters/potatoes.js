export default class Potato {
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
