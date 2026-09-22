import { useEffect, useRef, useState } from 'react';
import { Sparkles, Play, Pause, RotateCw, Layers, Compass, Globe } from 'lucide-react';

interface Live3DAnimationProps {
  interactive?: boolean;
}

export function Live3DAnimation({ interactive = true }: Live3DAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [wireframeStyle, setWireframeStyle] = useState<'cyber' | 'neon' | 'matrix'>('cyber');
  const [activeSpeed, setActiveSpeed] = useState<number>(1);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Sphere Points
    const numPoints = 140;
    const radius = Math.min(width, height) * 0.32;
    const points: Array<{ x: number; y: number; z: number; origX: number; origY: number; origZ: number }> = [];

    // Distribute points on sphere using Fibonacci spiral
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        origX: x * radius,
        origY: y * radius,
        origZ: z * radius,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Update rotation
      if (isPlaying) {
        angleY += 0.007 * activeSpeed;
        angleX += 0.003 * activeSpeed;
      }

      // Mouse interactive tilt factor
      const targetAngleY = angleY + mousePos.x * 0.5;
      const targetAngleX = angleX + mousePos.y * 0.5;

      const cosY = Math.cos(targetAngleY);
      const sinY = Math.sin(targetAngleY);
      const cosX = Math.cos(targetAngleX);
      const sinX = Math.sin(targetAngleX);

      // Transform points
      const transformed = points.map((p) => {
        // Rotate around Y
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // Rotate around X
        let y2 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + radius) / (2 * radius)));

        return { x: projX, y: projY, z: z2, scale, alpha };
      });

      // Sort by depth for correct painter's algorithm
      transformed.sort((a, b) => b.z - a.z);

      // Draw connecting lines between nearby points
      for (let i = 0; i < transformed.length; i++) {
        for (let j = i + 1; j < transformed.length; j++) {
          const dx = transformed[i].x - transformed[j].x;
          const dy = transformed[i].y - transformed[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 48) {
            const lineAlpha = (1 - dist / 48) * 0.28 * transformed[i].alpha;
            ctx.beginPath();
            ctx.strokeStyle =
              wireframeStyle === 'cyber'
                ? `rgba(59, 130, 246, ${lineAlpha})`
                : wireframeStyle === 'neon'
                ? `rgba(236, 72, 153, ${lineAlpha})`
                : `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(transformed[i].x, transformed[i].y);
            ctx.lineTo(transformed[j].x, transformed[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw orbital holographic ring around sphere
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.35, radius * 0.45, targetAngleY * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle =
        wireframeStyle === 'cyber'
          ? 'rgba(147, 197, 253, 0.25)'
          : wireframeStyle === 'neon'
          ? 'rgba(244, 114, 182, 0.25)'
          : 'rgba(52, 211, 153, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Satellite glowing orbiting node (Ranchi HQ Uplink beacon)
      const orbitAngle = targetAngleY * 2;
      const satX = cx + Math.cos(orbitAngle) * (radius * 1.35);
      const satY = cy + Math.sin(orbitAngle) * (radius * 0.45);

      const satGrad = ctx.createRadialGradient(satX, satY, 0, satX, satY, 14);
      satGrad.addColorStop(0, '#ffffff');
      satGrad.addColorStop(0.3, '#3b82f6');
      satGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.beginPath();
      ctx.arc(satX, satY, 14, 0, Math.PI * 2);
      ctx.fillStyle = satGrad;
      ctx.fill();

      // Label for satellite
      ctx.fillStyle = '#60a5fa';
      ctx.font = '9px monospace';
      ctx.fillText('RANCHI_HQ_BEACON', satX + 16, satY + 3);

      // Draw points
      transformed.forEach((p) => {
        const pointRadius = Math.max(1, p.scale * 2.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, pointRadius, 0, Math.PI * 2);

        ctx.fillStyle =
          wireframeStyle === 'cyber'
            ? `rgba(96, 165, 250, ${p.alpha})`
            : wireframeStyle === 'neon'
            ? `rgba(244, 114, 182, ${p.alpha})`
            : `rgba(52, 211, 153, ${p.alpha})`;

        ctx.fill();
      });

      // Center glowing core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.7);
      coreGrad.addColorStop(
        0,
        wireframeStyle === 'cyber'
          ? 'rgba(59, 130, 246, 0.16)'
          : wireframeStyle === 'neon'
          ? 'rgba(236, 72, 153, 0.16)'
          : 'rgba(16, 185, 129, 0.16)'
      );
      coreGrad.addColorStop(1, 'rgba(8, 15, 30, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPlaying, wireframeStyle, activeSpeed, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] rounded-3xl bg-slate-950/80 border border-slate-800/80 overflow-hidden flex items-center justify-center shadow-2xl glass-cyber-panel"
    >
      {/* Background radial ambient lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      {/* Top telemetry tags */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 font-mono text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-full backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-bold">LIVE 3D VECTOR MATRIX</span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-400">60 FPS HARDWARE ACCELERATED</span>
        </div>

        <div className="hidden sm:flex items-center gap-1 bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-full text-slate-400">
          <Globe className="w-3 h-3 text-purple-400" />
          <span>FIBONACCI SPATIAL MESH</span>
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing z-0" />

      {/* Floating Interactive Controls Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between items-center gap-2 z-10 font-mono text-xs">
        <div className="flex items-center gap-1.5 bg-slate-950/90 border border-slate-800/90 p-1.5 rounded-xl backdrop-blur">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
            title={isPlaying ? 'Pause Rotation' : 'Resume Rotation'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            onClick={() => setActiveSpeed((prev) => (prev >= 2 ? 0.5 : prev + 0.5))}
            className="px-2 py-1 rounded-lg bg-slate-900 text-[10px] text-blue-400 font-bold hover:bg-slate-800 transition"
            title="Adjust Orbit Velocity"
          >
            {activeSpeed}x
          </button>
        </div>

        <div className="flex items-center gap-1 bg-slate-950/90 border border-slate-800/90 p-1.5 rounded-xl backdrop-blur text-[10px]">
          <span className="text-slate-500 hidden sm:inline px-1">Shader:</span>
          <button
            onClick={() => setWireframeStyle('cyber')}
            className={`px-2 py-1 rounded-lg transition ${
              wireframeStyle === 'cyber' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Cyber
          </button>
          <button
            onClick={() => setWireframeStyle('neon')}
            className={`px-2 py-1 rounded-lg transition ${
              wireframeStyle === 'neon' ? 'bg-pink-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Neon
          </button>
          <button
            onClick={() => setWireframeStyle('matrix')}
            className={`px-2 py-1 rounded-lg transition ${
              wireframeStyle === 'matrix' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Matrix
          </button>
        </div>
      </div>
    </div>
  );
}
