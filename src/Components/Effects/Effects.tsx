import { onMount } from 'solid-js';

import Particle from '../../Classes/Particle';
import MouseParticle from '../../Classes/MouseParticle';

import './Effects.css'
import BigParticle from '../../Classes/BigParticle';

let Effects = () => {
  let canvas: HTMLCanvasElement;
  let particles: Array<Particle> = [];
  let frameCount = 0;

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    })

    window.addEventListener('mousemove', ( e: MouseEvent ) => {
      let p = new MouseParticle();

      p.x = e.clientX;
      p.y = e.clientY;

      p.remove = () => particles = particles.filter(x => x !== p);
      particles.push(p);
    })

    let ctx = canvas.getContext('2d')!;

    let render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => p.render(ctx, canvas));

      if(frameCount > 10){
        let p = new BigParticle();
        p.remove = () => particles = particles.filter(x => x !== p);

        particles.push(p);
        frameCount = 0;
      }

      frameCount++;
    }

    render();
  })

  return (
    <canvas class="effects-canvas" ref={( el ) => canvas = el}></canvas>
  )
}

export default Effects