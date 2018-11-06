export default class Health {
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
