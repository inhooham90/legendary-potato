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
