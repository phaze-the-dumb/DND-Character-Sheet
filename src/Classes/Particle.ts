class Particle{
  frame: number = 0;
  x: number = 0;
  y: number = 0;

  xVel: number = 0;
  yVel: number = 0;

  remove?: () => void;

  constructor(){}

  render( _ctx: CanvasRenderingContext2D, _canvas: HTMLCanvasElement ): void {}
}

export default Particle