import { useEffect, useRef } from 'react';
import { useTheme } from '../theme/ThemeContext';

const LEGENDARY = ['aurora-boreal', 'cosmos', 'magma'] as const;

type Particle = {
  x: number; y: number; r: number;
  vx: number; vy: number;
  alpha: number; color: string;
};

const THEME_PARTICLES: Record<string, { colors: string[]; count: number; speed: number }> = {
  'aurora-boreal': {
    colors: ['rgba(0,229,255,', 'rgba(0,255,157,', 'rgba(100,200,255,'],
    count: 40, speed: 0.3,
  },
  'cosmos': {
    colors: ['rgba(191,95,255,', 'rgba(255,97,230,', 'rgba(255,255,255,'],
    count: 60, speed: 0.15,
  },
  'magma': {
    colors: ['rgba(255,109,0,', 'rgba(255,60,0,', 'rgba(255,171,0,'],
    count: 30, speed: 0.5,
  },
};

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const isLegendary = (LEGENDARY as readonly string[]).includes(theme);
  const config = THEME_PARTICLES[theme];

  useEffect(() => {
    if (!isLegendary || !config) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = Array.from({ length: config.count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * config.speed,
      vy: theme === 'magma'
        ? -(Math.random() * config.speed + 0.1)
        : (Math.random() - 0.5) * config.speed,
      alpha: Math.random() * 0.6 + 0.2,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.alpha += (Math.random() - 0.5) * 0.02;
        p.alpha = Math.max(0.1, Math.min(0.8, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        if (theme === 'cosmos' && p.r > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * 0.15})`;
          ctx.fill();
        }
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [theme, isLegendary]);

  if (!isLegendary) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}
