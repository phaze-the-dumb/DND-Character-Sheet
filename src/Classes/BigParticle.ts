import Particle from "./Particle";

class BigParticle extends Particle{
  constructor(){
    super();

    this.xVel = (Math.random() * 4) - 2;
    this.yVel = (Math.random() * 4) - 2;

    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
  }

  render( ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement ): void {
    this.frame++;
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#fff';

    this.x += this.xVel;
    this.y += this.yVel;

    ctx.globalAlpha = Math.max((-Math.pow( (( 1 / 50 ) * this.frame) - 1, 2 ) + 1) / 20, 0);

    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.shadowBlur = 0;
    if(this.frame > 100 && this.remove)
      this.remove();
  }
}

export default BigParticle