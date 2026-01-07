

// // // // import { useRef, useEffect } from "react";

// // // // export default function ParticleIconMorph3D({ title, isMobile = false }) {
// // // //   const canvasRef = useRef(null);
// // // //   const particles = useRef([]);
// // // //   const mouse = useRef({ x: -1000, y: -1000, active: false });
// // // //   const rafRef = useRef(null);
// // // //   const rotationRef = useRef({ x: 0, y: 0 });

// // // //   const get3DTargets = (count) => {
// // // //     const targets = [];
// // // //     const iconType = isMobile ? "code" : 
// // // //       (title === "Web Development" ? "browser" : 
// // // //        title === "App Development" ? "mobile" : 
// // // //        title === "Software Development" ? "cube" : 
// // // //        title === "Game Development" ? "gamepad" :
// // // //        title === "UI/UX Design" ? "pen" : "browser");

// // // //     const addPoint = (x, y, z) => targets.push({ x, y, z });

// // // //     // Target size constant: ~360-400 units
// // // //     const BASE_SIZE = 180; 

// // // //     switch (iconType) {
// // // //       case "browser": 
// // // //         // Sphere: Diameter 360
// // // //         for (let i = 0; i < count; i++) {
// // // //           const theta = Math.random() * Math.PI * 2;
// // // //           const phi = Math.acos((Math.random() * 2) - 1);
// // // //           const r = BASE_SIZE + Math.random() * 10;
// // // //           addPoint(
// // // //             r * Math.sin(phi) * Math.cos(theta),
// // // //             r * Math.sin(phi) * Math.sin(theta),
// // // //             r * Math.cos(phi)
// // // //           );
// // // //         }
// // // //         break;

// // // //       case "cube": 
// // // //         // Cube: 360 x 360 x 360
// // // //         for (let i = 0; i < count; i++) {
// // // //           addPoint(
// // // //             (Math.random() - 0.5) * (BASE_SIZE * 2),
// // // //             (Math.random() - 0.5) * (BASE_SIZE * 2),
// // // //             (Math.random() - 0.5) * (BASE_SIZE * 2)
// // // //           );
// // // //         }
// // // //         break;
        
// // // //       case "mobile": 
// // // //         // Phone: 220 Width x 360 Height
// // // //         for (let i = 0; i < count; i++) {
// // // //           addPoint(
// // // //             (Math.random() - 0.5) * 220, 
// // // //             (Math.random() - 0.5) * (BASE_SIZE * 2), 
// // // //             (Math.random() - 0.5) * 60    
// // // //           );
// // // //         }
// // // //         break;

// // // //       case "pen": 
// // // //         // Pen: 360 Height
// // // //         for (let i = 0; i < count; i++) {
// // // //           const h = (Math.random() - 0.5) * (BASE_SIZE * 2); 
// // // //           let rBase = 40; 
// // // //           // Tapering tip
// // // //           if(h > 120) rBase = 40 * (1 - (h-120)/60); 
// // // //           const theta = Math.random() * Math.PI * 2;
// // // //           const r = Math.sqrt(Math.random()) * rBase;
// // // //           addPoint(r * Math.cos(theta), h, r * Math.sin(theta));
// // // //         }
// // // //         break;

// // // //       case "gamepad": 
// // // //         // Gamepad: Total width ~360
// // // //         for (let i = 0; i < count; i++) {
// // // //           const rand = Math.random();
// // // //           if (rand < 0.6) {
// // // //             // Main Body (260 x 140)
// // // //             addPoint((Math.random() - 0.5) * 260, (Math.random() - 0.5) * 140, (Math.random() - 0.5) * 70);
// // // //           } else {
// // // //             // Side Handles (Extending total width to ~360)
// // // //             const side = Math.random() > 0.5 ? 1 : -1;
// // // //             const angle = Math.random() * Math.PI * 2;
// // // //             const r = Math.random() * 50;
// // // //             addPoint(
// // // //               (side * 130) + Math.cos(angle) * r,
// // // //               (Math.random() * 160) - 40, 
// // // //               Math.sin(angle) * r
// // // //             );
// // // //           }
// // // //         }
// // // //         break;
// // // //       default:
// // // //         for (let i = 0; i < count; i++) addPoint(0,0,0);
// // // //     }
// // // //     return targets;
// // // //   };

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     const ctx = canvas.getContext("2d");
    
// // // //     const CANVAS_SIZE = 700;
// // // //     const CENTER = CANVAS_SIZE / 2;
// // // //     const COUNT = 3500; 
    
// // // //     canvas.width = CANVAS_SIZE;
// // // //     canvas.height = CANVAS_SIZE;

// // // //     const fov = 550; 
// // // //     const targets3D = get3DTargets(COUNT);

// // // //     if (particles.current.length === 0) {
// // // //       particles.current = Array.from({ length: COUNT }, (_, i) => {
// // // //         const t = targets3D[i];
// // // //         return {
// // // //           x: (Math.random() - 0.5) * canvas.width,
// // // //           y: (Math.random() - 0.5) * canvas.height,
// // // //           z: (Math.random() - 0.5) * canvas.width,
// // // //           tx: t.x, ty: t.y, tz: t.z,
// // // //           vx: 0, vy: 0, vz: 0,
// // // //           baseRad: Math.random() * 2 + 1,
// // // //         };
// // // //       });
// // // //     } else {
// // // //       particles.current.forEach((p, i) => {
// // // //         const t = targets3D[i % targets3D.length];
// // // //         p.tx = t.x; p.ty = t.y; p.tz = t.z;
// // // //       });
// // // //     }

// // // //     function animate() {
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // //       rotationRef.current.y += 0.006; 
// // // //       const cosY = Math.cos(rotationRef.current.y);
// // // //       const sinY = Math.sin(rotationRef.current.y);

// // // //       particles.current.forEach(p => {
// // // //         // Simple easing physics
// // // //         p.vx += (p.tx - p.x) * 0.04;
// // // //         p.vy += (p.ty - p.y) * 0.04;
// // // //         p.vz += (p.tz - p.z) * 0.04;

// // // //         p.x += p.vx *= 0.8;
// // // //         p.y += p.vy *= 0.8;
// // // //         p.z += p.vz *= 0.8;

// // // //         // Rotation
// // // //         let rotatedX = p.x * cosY - p.z * sinY;
// // // //         let rotatedZ = p.x * sinY + p.z * cosY;
// // // //         let rotatedY = p.y;

// // // //         // Projection
// // // //         const depth = fov / (fov + rotatedZ + 300); 
// // // //         const screenX = CENTER + rotatedX * depth;
// // // //         const screenY = CENTER + rotatedY * depth;

// // // //         if (mouse.current.active) {
// // // //           const dx = screenX - mouse.current.x;
// // // //           const dy = screenY - mouse.current.y;
// // // //           const dist = Math.sqrt(dx * dx + dy * dy);
// // // //           const repulsionRadius = 100;

// // // //           if (dist < repulsionRadius) {
// // // //             const force = (repulsionRadius - dist) / repulsionRadius;
// // // //             const angle = Math.atan2(dy, dx);
// // // //             p.vx += Math.cos(angle) * force * 15;
// // // //             p.vy += Math.sin(angle) * force * 15;
// // // //           }
// // // //         }

// // // //         const radius = p.baseRad * depth;
// // // //         const opacity = Math.min(1, Math.max(0.1, depth * depth * 1.5));
        
// // // //         ctx.beginPath();
// // // //         ctx.arc(screenX, screenY, Math.max(0.1, radius), 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
// // // //         ctx.fill();
// // // //       });

// // // //       rafRef.current = requestAnimationFrame(animate);
// // // //     }

// // // //     animate();
// // // //     return () => cancelAnimationFrame(rafRef.current);
// // // //   }, [title, isMobile]);

// // // //   const handleMouseMove = (e) => {
// // // //     const rect = canvasRef.current.getBoundingClientRect();
// // // //     mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
// // // //   };

// // // //   return (
// // // //     <div 
// // // //       className="relative flex items-start justify-center w-[800px] h-[800px]"
// // // //       onMouseMove={handleMouseMove}
// // // //       onMouseLeave={() => { mouse.current.active = false; }}
// // // //     >
// // // //       <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] animate-pulse" />
// // // //       <canvas 
// // // //         ref={canvasRef} 
// // // //         className="relative z-10" 
// // // //         style={{ filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.3))' }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // "use client";

// // // // import { useRef, useEffect } from "react";

// // // // export default function ParticleIconMorph3D({ title, isMobile = false }) {
// // // //   const canvasRef = useRef(null);
// // // //   const items = useRef([]);
// // // //   const mouse = useRef({ x: -1000, y: -1000, active: false });
// // // //   const rafRef = useRef(null);
// // // //   const rotationRef = useRef(0);
// // // //   const imageRef = useRef(null);

// // // //   /* ONLINE IMAGE MAP (CORS SAFE) */
// // // //   const IMAGE_MAP = {
// // // //     "Web Development":
// // // //       "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
// // // //     "App Development":
// // // //       "https://img.icons8.com/fluency/512/android-os.png",
// // // //     "Software Development":
// // // //       "https://img.icons8.com/fluency/512/software-installer.png",
// // // //     "Game Development":
// // // //       "https://img.icons8.com/fluency/512/controller.png",
// // // //     "UI/UX Design":
// // // //       "https://img.icons8.com/fluency/512/design.png",
// // // //     default:
// // // //       "https://img.icons8.com/fluency/512/source-code.png",
// // // //   };

// // // //   /* TARGET POSITIONS (3D SPHERE) */
// // // //   const getTargets = (count) => {
// // // //     const targets = [];
// // // //     const R = 180;

// // // //     for (let i = 0; i < count; i++) {
// // // //       const theta = Math.random() * Math.PI * 2;
// // // //       const phi = Math.acos(Math.random() * 2 - 1);
// // // //       const r = R + Math.random() * 40;

// // // //       targets.push({
// // // //         x: r * Math.sin(phi) * Math.cos(theta),
// // // //         y: r * Math.sin(phi) * Math.sin(theta),
// // // //         z: r * Math.cos(phi),
// // // //       });
// // // //     }
// // // //     return targets;
// // // //   };

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     const ctx = canvas.getContext("2d");

// // // //     const SIZE = 700;
// // // //     const CENTER = SIZE / 2;
// // // //     const COUNT = isMobile ? 18 : 32;
// // // //     const FOV = 600;

// // // //     canvas.width = SIZE;
// // // //     canvas.height = SIZE;

// // // //     /* LOAD IMAGE SAFELY */
// // // //     const img = new Image();
// // // //     img.crossOrigin = "anonymous";
// // // //     img.src = IMAGE_MAP[title] || IMAGE_MAP.default;

// // // //     img.onload = () => {
// // // //       imageRef.current = img;
// // // //     };

// // // //     img.onerror = () => {
// // // //       console.error("Image failed to load:", img.src);
// // // //       imageRef.current = null;
// // // //     };

// // // //     const targets = getTargets(COUNT);

// // // //     items.current = Array.from({ length: COUNT }, (_, i) => {
// // // //       const t = targets[i];
// // // //       return {
// // // //         x: (Math.random() - 0.5) * 500,
// // // //         y: (Math.random() - 0.5) * 500,
// // // //         z: (Math.random() - 0.5) * 500,
// // // //         tx: t.x,
// // // //         ty: t.y,
// // // //         tz: t.z,
// // // //         vx: 0,
// // // //         vy: 0,
// // // //         vz: 0,
// // // //         size: Math.random() * 40 + 40,
// // // //       };
// // // //     });

// // // //     function animate() {
// // // //       ctx.clearRect(0, 0, SIZE, SIZE);

// // // //       rotationRef.current += 0.005;
// // // //       const cosY = Math.cos(rotationRef.current);
// // // //       const sinY = Math.sin(rotationRef.current);

// // // //       items.current.forEach((p) => {
// // // //         /* MORPH MOTION */
// // // //         p.vx += (p.tx - p.x) * 0.04;
// // // //         p.vy += (p.ty - p.y) * 0.04;
// // // //         p.vz += (p.tz - p.z) * 0.04;

// // // //         p.x += p.vx *= 0.85;
// // // //         p.y += p.vy *= 0.85;
// // // //         p.z += p.vz *= 0.85;

// // // //         /* ROTATION */
// // // //         const rx = p.x * cosY - p.z * sinY;
// // // //         const rz = p.x * sinY + p.z * cosY;
// // // //         const ry = p.y;

// // // //         /* PROJECTION */
// // // //         const depth = FOV / (FOV + rz + 400);
// // // //         const sx = CENTER + rx * depth;
// // // //         const sy = CENTER + ry * depth;

// // // //         /* MOUSE REPULSION */
// // // //         if (mouse.current.active) {
// // // //           const dx = sx - mouse.current.x;
// // // //           const dy = sy - mouse.current.y;
// // // //           const dist = Math.sqrt(dx * dx + dy * dy);

// // // //           if (dist < 120) {
// // // //             const force = (120 - dist) / 120;
// // // //             p.vx += (dx / dist) * force * 6;
// // // //             p.vy += (dy / dist) * force * 6;
// // // //           }
// // // //         }

// // // //         const size = p.size * depth;

// // // //         /* SAFE DRAW */
// // // //         if (
// // // //           imageRef.current &&
// // // //           imageRef.current.complete &&
// // // //           imageRef.current.naturalWidth > 0
// // // //         ) {
// // // //           ctx.globalAlpha = Math.min(1, depth * 1.4);
// // // //           ctx.drawImage(
// // // //             imageRef.current,
// // // //             sx - size / 2,
// // // //             sy - size / 2,
// // // //             size,
// // // //             size
// // // //           );
// // // //         }
// // // //       });

// // // //       ctx.globalAlpha = 1;
// // // //       rafRef.current = requestAnimationFrame(animate);
// // // //     }

// // // //     animate();
// // // //     return () => cancelAnimationFrame(rafRef.current);
// // // //   }, [title, isMobile]);

// // // //   const handleMouseMove = (e) => {
// // // //     const rect = canvasRef.current.getBoundingClientRect();
// // // //     mouse.current = {
// // // //       x: e.clientX - rect.left,
// // // //       y: e.clientY - rect.top,
// // // //       active: true,
// // // //     };
// // // //   };

// // // //   return (
// // // //     <div
// // // //       className="relative flex items-center justify-center w-[800px] h-[800px]"
// // // //       onMouseMove={handleMouseMove}
// // // //       onMouseLeave={() => (mouse.current.active = false)}
// // // //     >
// // // //       <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] bg-indigo-500/20 animate-pulse" />
// // // //       <canvas
// // // //         ref={canvasRef}
// // // //         className="relative z-10"
// // // //         style={{
// // // //           filter: "drop-shadow(0 0 14px rgba(255,255,255,0.25))",
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useRef, useEffect } from "react";

// // // export default function ParticleIconMorph3D({ title }) {
// // //   const canvasRef = useRef(null);
// // //   const imageRef = useRef(null);
// // //   const rafRef = useRef(null);
// // //   const angleRef = useRef(0);
// // //   const mouseRef = useRef({ x: 0, y: 0, active: false });

// // //   const IMAGE_MAP = {
// // //     "Web Development":
// // //       "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
// // //     "App Development":
// // //       "https://img.icons8.com/fluency/512/android-os.png",
// // //     "Software Development":
// // //       "https://img.icons8.com/fluency/512/software-installer.png",
// // //     "Game Development":
// // //       "https://img.icons8.com/fluency/512/controller.png",
// // //     "UI/UX Design":
// // //       "https://img.icons8.com/fluency/512/design.png",
// // //     default:
// // //       "https://img.icons8.com/fluency/512/source-code.png",
// // //   };

// // //   useEffect(() => {
// // //     const canvas = canvasRef.current;
// // //     const ctx = canvas.getContext("2d");

// // //     const SIZE = 600;
// // //     const CENTER = SIZE / 2;
// // //     const RADIUS = 120; // circular path radius
// // //     const IMG_SIZE = 240; // fixed size (NO ZOOM)

// // //     canvas.width = SIZE;
// // //     canvas.height = SIZE;

// // //     const img = new Image();
// // //     img.crossOrigin = "anonymous";
// // //     img.src = IMAGE_MAP[title] || IMAGE_MAP.default;

// // //     img.onload = () => (imageRef.current = img);
// // //     img.onerror = () => (imageRef.current = null);

// // //     function animate() {
// // //       ctx.clearRect(0, 0, SIZE, SIZE);

// // //       if (!imageRef.current) {
// // //         rafRef.current = requestAnimationFrame(animate);
// // //         return;
// // //       }

// // //       angleRef.current += 0.01; // rotation speed

// // //       const mx = mouseRef.current.active ? mouseRef.current.x * 30 : 0;
// // //       const my = mouseRef.current.active ? mouseRef.current.y * 30 : 0;

// // //       const x =
// // //         CENTER + Math.cos(angleRef.current) * RADIUS + mx;
// // //       const y =
// // //         CENTER + Math.sin(angleRef.current) * RADIUS + my;

// // //       ctx.save();
// // //       ctx.translate(x, y);
// // //       ctx.rotate(angleRef.current); // self rotation
// // //       ctx.drawImage(
// // //         imageRef.current,
// // //         -IMG_SIZE / 2,
// // //         -IMG_SIZE / 2,
// // //         IMG_SIZE,
// // //         IMG_SIZE
// // //       );
// // //       ctx.restore();

// // //       rafRef.current = requestAnimationFrame(animate);
// // //     }

// // //     animate();
// // //     return () => cancelAnimationFrame(rafRef.current);
// // //   }, [title]);

// // //   const handleMouseMove = (e) => {
// // //     const rect = canvasRef.current.getBoundingClientRect();
// // //     mouseRef.current = {
// // //       x: (e.clientX - rect.left) / rect.width - 0.5,
// // //       y: (e.clientY - rect.top) / rect.height - 0.5,
// // //       active: true,
// // //     };
// // //   };

// // //   return (
// // //     <div
// // //       className="relative flex items-center justify-center w-[700px] h-[700px]"
// // //       onMouseMove={handleMouseMove}
// // //       onMouseLeave={() => (mouseRef.current.active = false)}
// // //     >
// // //       {/* Soft glow */}
// // //       <div className="absolute w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-[140px]" />

// // //       <canvas
// // //         ref={canvasRef}
// // //         className="relative z-10"
// // //         style={{
// // //           filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useRef, useEffect } from "react";

// // export default function ParticleIconMorph3D({ title }) {
// //   const canvasRef = useRef(null);
// //   const imageRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const rotationRef = useRef(0);

// //   const IMAGE_MAP = {
// //     "Web Development":
// //       "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
// //     "App Development":
// //       "https://img.icons8.com/fluency/512/android-os.png",
// //     "Software Development":
// //       "https://img.icons8.com/fluency/512/software-installer.png",
// //     "Game Development":
// //       "https://img.icons8.com/fluency/512/controller.png",
// //     "UI/UX Design":
// //       "https://img.icons8.com/fluency/512/design.png",
// //     default:
// //       "https://img.icons8.com/fluency/512/source-code.png",
// //   };

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas.getContext("2d");

// //     const SIZE = 600;
// //     const CENTER = SIZE / 2;
// //     const IMG_SIZE = 260;

// //     canvas.width = SIZE;
// //     canvas.height = SIZE;

// //     const img = new Image();
// //     img.crossOrigin = "anonymous";
// //     img.src = IMAGE_MAP[title] || IMAGE_MAP.default;

// //     img.onload = () => {
// //       imageRef.current = img;
// //     };

// //     img.onerror = () => {
// //       imageRef.current = null;
// //     };

// //     function animate() {
// //       ctx.clearRect(0, 0, SIZE, SIZE);

// //       if (!imageRef.current) {
// //         rafRef.current = requestAnimationFrame(animate);
// //         return;
// //       }

// //       rotationRef.current += 0.01; // smooth rotation

// //       const angle = rotationRef.current;

// //       ctx.save();
// //       ctx.translate(CENTER, CENTER);

// //       /* 3D COIN STYLE ROTATION */
// //       const scaleX = Math.cos(angle); // fake 3D
// //       ctx.scale(scaleX, 1);
// //       ctx.rotate(angle * 0.15);

// //       ctx.drawImage(
// //         imageRef.current,
// //         -IMG_SIZE / 2,
// //         -IMG_SIZE / 2,
// //         IMG_SIZE,
// //         IMG_SIZE
// //       );

// //       ctx.restore();

// //       rafRef.current = requestAnimationFrame(animate);
// //     }

// //     animate();
// //     return () => cancelAnimationFrame(rafRef.current);
// //   }, [title]);

// //   return (
// //     <div className="relative flex items-center justify-center w-[700px] h-[700px]">
// //       {/* glow */}
// //       <div className="absolute w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-[140px]" />

// //       <canvas
// //         ref={canvasRef}
// //         className="relative z-10"
// //         style={{
// //           filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.35))",
// //         }}
// //       />
// //     </div>
// //   );
// // }
// "use client";

// import { useRef, useEffect } from "react";

// export default function ParticleIconMorph3D({ title }) {
//   const canvasRef = useRef(null);
//   const rafRef = useRef(null);

//   const currentImage = useRef(null);
//   const prevImage = useRef(null);

//   const transition = useRef({
//     active: false,
//     progress: 0,
//   });

//   const IMAGE_MAP = {
//     "Web Development":
//       "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
//     "App Development":
//       "https://img.icons8.com/fluency/512/android-os.png",
//     "Software Development":
//       "https://img.icons8.com/fluency/512/software-installer.png",
//     "Game Development":
//       "https://img.icons8.com/fluency/512/controller.png",
//     "UI/UX Design":
//       "https://img.icons8.com/fluency/512/design.png",
//     default:
//       "https://img.icons8.com/fluency/512/source-code.png",
//   };

//   const loadImage = (src, cb) => {
//     const img = new Image();
//     img.crossOrigin = "anonymous";
//     img.src = src;
//     img.onload = () => cb(img);
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const SIZE = 900;
//     const CENTER = SIZE / 2;
//     const IMG_SIZE = 360;

//     canvas.width = SIZE;
//     canvas.height = SIZE;

//     const drawImage = (img, x, y) => {
//       ctx.drawImage(
//         img,
//         x - IMG_SIZE / 2,
//         y - IMG_SIZE / 2,
//         IMG_SIZE,
//         IMG_SIZE
//       );
//     };

//     function animate() {
//       ctx.clearRect(0, 0, SIZE, SIZE);

//       if (transition.current.active && prevImage.current) {
//         transition.current.progress += 0.05;
//         const p = Math.min(transition.current.progress, 1);

//         // OLD → left bottom
//         const oldX = CENTER - p * 300;
//         const oldY = CENTER + p * 300;

//         // NEW → from right top to center
//         const newX = CENTER + (1 - p) * 300;
//         const newY = CENTER - (1 - p) *300;

//         drawImage(prevImage.current, oldX, oldY);
//         drawImage(currentImage.current, newX, newY);

//         if (p >= 1) {
//           transition.current.active = false;
//           prevImage.current = null;
//         }
//       } else if (currentImage.current) {
//         drawImage(currentImage.current, CENTER, CENTER);
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     }

//     animate();
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   /* HANDLE TITLE CHANGE */
//   useEffect(() => {
//     const src = IMAGE_MAP[title] || IMAGE_MAP.default;

//     loadImage(src, (img) => {
//       if (currentImage.current) {
//         prevImage.current = currentImage.current;
//         transition.current.active = true;
//         transition.current.progress = 0;
//       }
//       currentImage.current = img;
//     });
//   }, [title]);

//   return (
//     <div className="relative flex items-center justify-center w-[700px] h-[700px]">
//       <canvas
//         ref={canvasRef}
//         className="relative z-10"
//         style={{
//           filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))",
//         }}
//       />
//     </div>
//   );
// }
"use client";

import { useRef, useEffect } from "react";

export default function ParticleIconMorph3D({ title }) {
  const canvasRef = useRef(null);
  const currentImage = useRef(null);

  // Online images map
  const IMAGE_MAP = {
    "Web Development":
      "/images/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png",
    "App Development":
    "/images/3d-illustration-mobile-app-interface-design-with-colorful-icons-free-png.png",
    "Software Development":
      "images/web-page-smartphone-with-code-symbol-gear-cogwheel-web-development-software-engineering-setting-tools-programming-coding-concept-3d-vector-icon-cartoon-minimal-style_365941-1220.avif",
    "Game Development":
      "images/game-developer-3d-icon-png-download-7644092.webp",
    "UI/UX Design":
      "images/ui-ux-3d-icon-png-download-11780142 (1).webp",
    default:
      "/images/3d-code-icon-programming-code-symbols-software-and-web-development-icon-png.png",
  };

  // Image size map (dynamic per title)
  const IMAGE_SIZE_MAP = {
    "Web Development": 400,
    "App Development": 360,
    "Software Development": 380,
    "Game Development": 340,
    "UI/UX Design": 380,
    default: 360,
  };

  const loadImage = (src, cb) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => cb(img);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const SIZE = 900;
    const CENTER = SIZE / 2;

    canvas.width = SIZE;
    canvas.height = SIZE;

    const drawImage = (img, size) => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.drawImage(img, CENTER - size / 2, CENTER - size / 2, size, size);
    };

    function animate() {
      if (currentImage.current) {
        const IMG_SIZE = IMAGE_SIZE_MAP[title] || IMAGE_SIZE_MAP.default;
        drawImage(currentImage.current, IMG_SIZE);
      }
      requestAnimationFrame(animate);
    }

    animate();
  }, [title]);

  // Handle title / image change
  useEffect(() => {
    const src = IMAGE_MAP[title] || IMAGE_MAP.default;
    loadImage(src, (img) => {
      currentImage.current = img;
    });
  }, [title]);

  return (
    <div className="relative flex items-center justify-center w-[900px] h-[900px]">
      {/* Soft glow behind */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[140px]" />
      <canvas
        ref={canvasRef}
        className="relative z-10"
        style={{
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))",
        }}
      />
    </div>
  );
}
           