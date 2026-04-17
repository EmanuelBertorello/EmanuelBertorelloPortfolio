import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

interface Star {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  phase: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('starsCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private animId = 0;
  private resizeHandler!: () => void;

  ngAfterViewInit(): void {
    this.initStarfield();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.resizeHandler);
  }

  private initStarfield(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    this.resizeHandler = resize;
    resize();
    window.addEventListener('resize', resize);

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x:            rand(0, canvas.width),
      y:            rand(0, canvas.height),
      r:            rand(0.2, 1.6),
      baseOpacity:  rand(0.15, 0.65),
      phase:        rand(0, Math.PI * 2),
      twinkleSpeed: rand(0.003, 0.012),
      vx:           rand(-0.06, 0.06),
      vy:           rand(-0.18, -0.04), // suben lentamente
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      stars.forEach((s) => {
        // Movimiento
        s.x += s.vx;
        s.y += s.vy;

        // Wrap: si sale por arriba reaparece abajo
        if (s.y < -2)  { s.y = canvas.height + 2; s.x = rand(0, canvas.width); }
        if (s.x < -2)  { s.x = canvas.width + 2; }
        if (s.x > canvas.width + 2) { s.x = -2; }

        // Twinkling
        const opacity = s.baseOpacity + Math.sin(t * s.twinkleSpeed * 60 + s.phase) * 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, opacity))})`;
        ctx.fill();
      });

      this.animId = requestAnimationFrame(draw);
    };

    draw();
  }
}
