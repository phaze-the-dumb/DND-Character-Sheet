import Particle from "./Particle";

class MouseParticle extends Particle {
  constructor(){
    super();

    this.xVel = (Math.random() * 2) - 1;
    this.yVel = (Math.random() * 2) - 1;
  }

  render( ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement ): void {
    this.frame++;
    ctx.fillStyle = '#fff';

    this.x += this.xVel;
    this.y += this.yVel;

    ctx.globalAlpha = Math.max((100 - this.frame) / 100, 0);

    ctx.beginPath();
    ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    if(this.frame > 100 && this.remove)
      this.remove();
  }
}

export default MouseParticle