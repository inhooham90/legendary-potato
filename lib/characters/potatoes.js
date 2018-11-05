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
      this.kick = { type:"kick", damage:20 };
      this.special = { type:"special", damage:25 };
      this.hp = 250;
    } else if (char === 'Ninja'){
      this.image.src = "./images/TKD.png";
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
    this.attacking = false;
    this.right;
    this.frames = 0;
  }

  move(move){
    if (move === "right" && this.x < 650) {
      this.x += 5;
    } else if (move === "left" && this.x > 180) {
      this.x -= 5;
    } else if (move === "punch" && !this.jumping) {
      this.frames = 1000;
    } else if (move === "kick" && !this.jumping) {
      this.frames = 2000;
      this.attacking = true;
    } else if (move === "punch" && this.jumping) {
      this.frames = 7500;
      this.attacking = true;
    } else if (move === "kick" && this.jumping) {
      this.frames = 8000;
      this.attacking = true;
    }
  }

  jump() {
    if (this.y === 210 && !this.jumping) {
      this.dy = 6;
      this.jumping = true;
      this.frames = 7000;
    }
  }

  hit(attack) {
    switch (attack.type) {
      case "punch":
        this.frames = 1500;
        this.hp -= attack.damage;
        if ( this.right ) {
          this.x += 1;
        } else {
          this.x -= 1;
        }
        break;
      case "kick":
        this.frames = 1500;
        this.hp -= attack.damage;
        if ( this.right ) {
          this.x += 3;
        } else {
          this.x -= 3;
        }
        break;
      case "special":
        this.frames = 1500;
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
    this.frames += 10;
    if (this.frames < 60) {
      this.sy = 0;
    } else if (this.frames < 120) {
      this.sy = 200;
    } else if (this.frames < 120) {
      this.sy = 200;
    } else if (this.frames > 120 && this.frames < 900) {
      this.sy = 0;
      this.frames = 0;
    } else if (this.frames >= 1000 && this.frames <= 1030) {
      this.sy = 400;
      if (this.frames === 1020 && Math.abs(this.x - foe.x) < 60) {
        foe.hit(this.punch);
      }
    } else if (this.frames > 1030 && this.frames < 1500) {
      this.sy = 0;
      this.frames = 0;
    } else if (this.frames >= 1500 && this.frames <= 1560) {
      this.sy = 1400;
      if (this.frames === 1560) {
        this.frames = 0;
      }
    } else if (this.frames > 2000 && this.frames <= 2040) {
      this.sy = 800;
      if (this.frames === 2020 && Math.abs(this.x - foe.x) < 60) {
        foe.hit(this.kick);
      }
    } else if (this.frames > 2040 && this.frames <= 2070) {
      this.sy = 1000;
      if (this.frames === 2070) {
        this.frames = 0;
      }
    } else if (this.frames >= 7000 && this.frames < 7500 && this.jumping) {
      this.sy = 1600;
    } else if (this.frames >= 7500 && this.frames < 8000 && this.jumping) {
      this.sy = 1800;
    } else if (this.frames >= 8000 && this.frames < 8500 && this.jumping) {
      this.sy = 2000;
    } else {
      this.frames = 0;
    }
     // else if (this.jumping || this.falling)
    this.sx = this.x > foe.x ? 200 : 0;
    this.right = this.x > foe.x ? true : false;
    if (this.y < 120) {
      this.dy = -6;
    } else if (this.y > 210 && this.jumping) {
      this.dy = 0;
      this.y = 210;
      this.jumping = false;
    }
    this.y -= this.dy;

    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
  }
}
