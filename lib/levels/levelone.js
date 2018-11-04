export default class LevelOne {
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
