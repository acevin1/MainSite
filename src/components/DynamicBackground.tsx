
import { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Clear canvas with black background
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create gradient effect around cursor with dark gold
      const gradient = ctx.createRadialGradient(
        mousePos.current.x, mousePos.current.y, 0,
        mousePos.current.x, mousePos.current.y, 200
      );
      
      gradient.addColorStop(0, 'rgba(133, 104, 41, 0.15)'); // Dark gold center
      gradient.addColorStop(0.3, 'rgba(133, 104, 41, 0.08)'); // Fade to less gold
      gradient.addColorStop(0.6, 'rgba(133, 104, 41, 0.03)'); // Very subtle gold
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Transparent edge

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default DynamicBackground;
