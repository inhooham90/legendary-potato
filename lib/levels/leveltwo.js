export default class LevelTwo {
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
