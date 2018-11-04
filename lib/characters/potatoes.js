export default class Potato {
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

  move(move){
    if (move === "right" && this.x < 650) {
      this.x += 2;
    } else if (move === "left" && this.x > 180) {
      this.x -= 2;
    } else if (move === "punch") {
      this.frames = 1000;
    } else if (move === "kick") {
      this.frames = 2000;
    }
  }

  fall() {
    if (this.grounded === false) {
        this.dy = -10;
    }
  }

  draw({ ctx, foe }) {
    // console.log("foe position", foePos);
    // console.log("char position", this.x);
    this.frames += 5;
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
    } else if (this.frames > 1030 && this.frames < 1900) {
      this.sy = 0;
      this.frames = 0;
    } else if (this.frames > 2000 && this.frames <= 2040) {
      this.sy = 800;
    } else if (this.frames > 2040 && this.frames <= 2070) {
      this.sy = 1000;
    } else if (this.frames > 2070) {
      this.sy = 0;
      this.frames = 0;
    }

    if (foe.x <= this.x) {
      this.sx = 200;
    } else {
      this.sx = 0;
    }
    ctx.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
  }
}
