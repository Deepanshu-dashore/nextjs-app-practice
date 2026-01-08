
"use client";

import { useRef, useEffect } from "react";

export default function ParticleIconMorph3D({ title }) {
  const canvasRef = useRef(null);
  const currentImage = useRef(null);

  const IMAGE_MAP = {
    "Web Development": "/images/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png",
    "App Development": "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
    "Software Development": "images/Software-DFbspHu0__1__1_-removebg-preview.png",
    "Game Development": "images/game-developer-3d-icon-png-download-7644092.webp",
    "UI/UX Design": "images/ui-ux-3d-icon-png-download-11780142 (1).webp",
    default: "/images/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png",
  };

  const IMAGE_SIZE_MAP = {
    "Web Development": 400, "App Development": 360, "Software Development": 380,
    "Game Development": 340, "UI/UX Design": 380, default: 360,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const SIZE = 900;
    canvas.width = SIZE;
    canvas.height = SIZE;

    function animate() {
      ctx.clearRect(0, 0, SIZE, SIZE);
      if (currentImage.current) {
        const size = IMAGE_SIZE_MAP[title] || IMAGE_SIZE_MAP.default;
        ctx.drawImage(currentImage.current, (SIZE - size) / 2, (SIZE - size) / 2, size, size);
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, [title]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = IMAGE_MAP[title] || IMAGE_MAP.default;
    img.onload = () => { currentImage.current = img; };
  }, [title]);

  return (
    <div className="relative flex items-center justify-center w-[900px] h-[400px] bg-[#030303] overflow-hidden rounded-3xl">
      
      {/* --- BACKGROUND GLOW LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Primary Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        
        {/* Secondary Shifting Glow */}
        <div 
          className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" 
          style={{ animation: 'move 10s infinite alternate ease-in-out' }}
        />
      </div>

      {/* --- MOTION BLUR ANIMATION --- */}
      <style jsx>{`
        @keyframes motionBlurIn {
          0% {
            transform: scale(0.7) translateY(20px);
            filter: blur(20px) brightness(0.5);
            opacity: 0;
          }
          50% {
            filter: blur(10px) brightness(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0);
            filter: blur(0px) brightness(1);
            opacity: 1;
          }
        }

        @keyframes move {
          from { transform: translate(-10%, -10%); }
          to { transform: translate(20%, 20%); }
        }

        .motion-blur-effect {
          animation: motionBlurIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* --- CANVAS ICON --- */}
      <canvas
        key={title} // Forces the animation to restart on title change
        ref={canvasRef}
        className="relative z-10 motion-blur-effect"
        style={{
          filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
        }}
      />

      {/* Foreground light sweep (Optional subtle overlay) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 z-20" />
    </div>
  );
}