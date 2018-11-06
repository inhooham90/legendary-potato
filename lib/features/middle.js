export default class Middle {
  constructor() {
    this.image = new Image();
    this.image.src = './images/gauge.png';
  }

  draw(ctx) {
    ctx.drawImage(this.image, 326, 10, 150, 100);
  }
}
