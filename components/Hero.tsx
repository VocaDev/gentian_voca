'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
    color: string;
  }>>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create particles with accent color
    const particles = particlesRef.current;
    if (particles.length === 0) {
      for (let i = 0; i < 80; i++) {
        const isAccent = Math.random() < 0.15;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: isAccent
            ? `rgba(52, 211, 153, ${Math.random() * 0.6 + 0.2})`
            : `rgba(113, 113, 122, ${Math.random() * 0.4 + 0.1})`,
        });
      }
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse repulsion
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          particle.vx += dx * 0.001;
          particle.vy += dy * 0.001;
        }

        // Dampen velocity
        particle.vx *= 0.999;
        particle.vy *= 0.999;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const cdx = particle.x - other.x;
          const cdy = particle.y - other.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 100) {
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.08 * (1 - cdist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen px-6 pt-28 pb-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 max-w-4xl"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-50 leading-[1.1]">
              Cleaning the noise.
              <br />
              <span className="accent-gradient">Predicting the future.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
              Data Engineering Intern specializing in ETL pipelines, Kaggle-sourced ML models,
              and polished UI/UX. Building systems that turn raw data into business intelligence.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 font-semibold text-base transition-all duration-300 hover:bg-emerald-500/5"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16 md:mt-12"
        >
          <a href="#about" className="group flex flex-col items-center gap-2">
            <span className="text-xs text-zinc-500 group-hover:text-emerald-400 transition-colors uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
