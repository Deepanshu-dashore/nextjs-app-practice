

import { useRef, useEffect } from "react";

export default function ParticleIconMorph3D({ title, isMobile = false }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000, active: false });
  const rafRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });

  const get3DTargets = (count) => {
    const targets = [];
    const iconType = isMobile ? "code" : 
      (title === "Web Development" ? "browser" : 
       title === "App Development" ? "mobile" : 
       title === "Software Development" ? "cube" : 
       title === "Game Development" ? "gamepad" :
       title === "UI/UX Design" ? "pen" : "browser");

    const addPoint = (x, y, z) => targets.push({ x, y, z });

    // Target size constant: ~360-400 units
    const BASE_SIZE = 180; 

    switch (iconType) {
      case "browser": 
        // Sphere: Diameter 360
        for (let i = 0; i < count; i++) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          const r = BASE_SIZE + Math.random() * 10;
          addPoint(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.sin(phi) * Math.sin(theta),
            r * Math.cos(phi)
          );
        }
        break;

      case "cube": 
        // Cube: 360 x 360 x 360
        for (let i = 0; i < count; i++) {
          addPoint(
            (Math.random() - 0.5) * (BASE_SIZE * 2),
            (Math.random() - 0.5) * (BASE_SIZE * 2),
            (Math.random() - 0.5) * (BASE_SIZE * 2)
          );
        }
        break;
        
      case "mobile": 
        // Phone: 220 Width x 360 Height
        for (let i = 0; i < count; i++) {
          addPoint(
            (Math.random() - 0.5) * 220, 
            (Math.random() - 0.5) * (BASE_SIZE * 2), 
            (Math.random() - 0.5) * 60    
          );
        }
        break;

      case "pen": 
        // Pen: 360 Height
        for (let i = 0; i < count; i++) {
          const h = (Math.random() - 0.5) * (BASE_SIZE * 2); 
          let rBase = 40; 
          // Tapering tip
          if(h > 120) rBase = 40 * (1 - (h-120)/60); 
          const theta = Math.random() * Math.PI * 2;
          const r = Math.sqrt(Math.random()) * rBase;
          addPoint(r * Math.cos(theta), h, r * Math.sin(theta));
        }
        break;

      case "gamepad": 
        // Gamepad: Total width ~360
        for (let i = 0; i < count; i++) {
          const rand = Math.random();
          if (rand < 0.6) {
            // Main Body (260 x 140)
            addPoint((Math.random() - 0.5) * 260, (Math.random() - 0.5) * 140, (Math.random() - 0.5) * 70);
          } else {
            // Side Handles (Extending total width to ~360)
            const side = Math.random() > 0.5 ? 1 : -1;
            const angle = Math.random() * Math.PI * 2;
            const r = Math.random() * 50;
            addPoint(
              (side * 130) + Math.cos(angle) * r,
              (Math.random() * 160) - 40, 
              Math.sin(angle) * r
            );
          }
        }
        break;
      default:
        for (let i = 0; i < count; i++) addPoint(0,0,0);
    }
    return targets;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const CANVAS_SIZE = 700;
    const CENTER = CANVAS_SIZE / 2;
    const COUNT = 3500; 
    
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const fov = 550; 
    const targets3D = get3DTargets(COUNT);

    if (particles.current.length === 0) {
      particles.current = Array.from({ length: COUNT }, (_, i) => {
        const t = targets3D[i];
        return {
          x: (Math.random() - 0.5) * canvas.width,
          y: (Math.random() - 0.5) * canvas.height,
          z: (Math.random() - 0.5) * canvas.width,
          tx: t.x, ty: t.y, tz: t.z,
          vx: 0, vy: 0, vz: 0,
          baseRad: Math.random() * 2 + 1,
        };
      });
    } else {
      particles.current.forEach((p, i) => {
        const t = targets3D[i % targets3D.length];
        p.tx = t.x; p.ty = t.y; p.tz = t.z;
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      rotationRef.current.y += 0.006; 
      const cosY = Math.cos(rotationRef.current.y);
      const sinY = Math.sin(rotationRef.current.y);

      particles.current.forEach(p => {
        // Simple easing physics
        p.vx += (p.tx - p.x) * 0.04;
        p.vy += (p.ty - p.y) * 0.04;
        p.vz += (p.tz - p.z) * 0.04;

        p.x += p.vx *= 0.8;
        p.y += p.vy *= 0.8;
        p.z += p.vz *= 0.8;

        // Rotation
        let rotatedX = p.x * cosY - p.z * sinY;
        let rotatedZ = p.x * sinY + p.z * cosY;
        let rotatedY = p.y;

        // Projection
        const depth = fov / (fov + rotatedZ + 300); 
        const screenX = CENTER + rotatedX * depth;
        const screenY = CENTER + rotatedY * depth;

        if (mouse.current.active) {
          const dx = screenX - mouse.current.x;
          const dy = screenY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 100;

          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 15;
            p.vy += Math.sin(angle) * force * 15;
          }
        }

        const radius = p.baseRad * depth;
        const opacity = Math.min(1, Math.max(0.1, depth * depth * 1.5));
        
        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.1, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [title, isMobile]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
  };

  return (
    <div 
      className="relative flex items-start justify-center w-[800px] h-[800px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouse.current.active = false; }}
    >
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[150px] animate-pulse" />
      <canvas 
        ref={canvasRef} 
        className="relative z-10" 
        style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.3))' }}
      />
    </div>
  );
}