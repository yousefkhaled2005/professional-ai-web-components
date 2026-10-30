import React, { useEffect, useRef } from 'react';

export const FluidShaderCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic wave points
    const points: Array<{ x: number; y: number; originY: number; speed: number; phase: number; radius: number; color: string }> = [];
    const colors = ['#38bdf8', '#818cf8', '#c084fc', '#06b6d4'];

    for (let i = 0; i < 24; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originY: Math.random() * height,
        speed: 0.001 + Math.random() * 0.002,
        phase: Math.random() * Math.PI * 2,
        radius: 120 + Math.random() * 200,
        color: colors[i % colors.length],
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.fillStyle = '#070b14';
      ctx.fillRect(0, 0, width, height);

      // Render glowing ambient blobs
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      points.forEach((p) => {
        p.y = p.originY + Math.sin(time + p.phase) * 60;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color + '26'); // ~15% opacity
        grad.addColorStop(0.5, p.color + '0d'); // ~5% opacity
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ambient subtle grid overlay
      ctx.restore();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
