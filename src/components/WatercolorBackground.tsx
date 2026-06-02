"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 x) {
    vec2 i = floor(x);
    vec2 f = fract(x);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    // Reduzido para 2 oitavas (antes 5). Isso remove o detalhe texturizado de "fumaça"
    // e cria manchas grandes, suaves e fluidas como aquarela na água.
    for (int i = 0; i < 2; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // "Zoom in" para as manchas de aquarela ficarem maiores e mais esparsas
    st *= 0.8;

    // Apply parallax from mouse
    vec2 parallax = u_mouse * 0.05;
    
    vec2 q = vec2(0.);
    // Movimento bem mais lento e fluido
    q.x = fbm(st + 0.02 * u_time + parallax);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.05 * u_time);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.03 * u_time);

    float f = fbm(st + r);

    // Colors
    vec3 colorBase = vec3(10.0/255.0, 17.0/255.0, 40.0/255.0); // #0A1128 Night
    vec3 colorTerracota = vec3(194.0/255.0, 109.0/255.0, 77.0/255.0); // #C26D4D
    vec3 colorGold = vec3(212.0/255.0, 175.0/255.0, 55.0/255.0); // #D4AF37

    // Mixing based on fbm values
    vec3 color = mix(colorBase, colorTerracota, clamp((f*f)*1.5, 0.0, 1.0));
    color = mix(color, colorGold, clamp(length(q)*0.3, 0.0, 1.0));
    color = mix(color, colorBase, clamp(length(r.x)*0.5, 0.0, 1.0));

    // Suavizar o contraste organicamente (sem o contraste agressivo de fumaça)
    color = mix(colorBase, color, smoothstep(0.1, 0.9, f));
    
    // Mistura sutil de 25%. Como não tem mais os "fios" grossos de fumaça,
    // podemos deixar a aquarela levemente mais presente e macia.
    color = mix(colorBase, color, 0.25);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function WatercolorBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // WebGL Capability Check (Graceful Degradation)
    const canvasCheck = document.createElement("canvas");
    const gl = canvasCheck.getContext("webgl") || canvasCheck.getContext("experimental-webgl");
    if (!gl) {
      mountNode.style.background = "linear-gradient(135deg, #0A1128 0%, #C26D4D 100%)";
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - Orthographic for 2D plane
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Renderer setup (Optimized for Mobile/120Hz)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, 
      alpha: false,
      powerPreference: "high-performance"
    });
    // Cap pixel ratio agressivo para dispositivos hi-res
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const setSize = () => {
      if (!mountNode) return;
      const width = mountNode.clientWidth || window.innerWidth;
      const height = mountNode.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      if (material.uniforms.u_resolution) {
        material.uniforms.u_resolution.value.set(width, height);
      }
    };

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_mouse: { value: new THREE.Vector2(0, 0) },
      },
      depthWrite: false,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    mountNode.appendChild(renderer.domElement);
    setSize();

    // Mouse tracking for parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);

    // Intersection Observer to pause animation when offscreen
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    if (mountNode) observer.observe(mountNode);

    // Animation Loop
    let animationFrameId: number;
    let time = 0;
    const timer = new THREE.Timer();

    // Limitador de FPS (Cap em 60fps para baterias de 120Hz/144Hz)
    const targetFps = 60;
    const frameInterval = 1000 / targetFps;
    let lastRenderTime = 0;

    const render = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isIntersecting) return; // Skip rendering if not visible

      const elapsed = timestamp - lastRenderTime;
      if (elapsed < frameInterval) return; // Drop frame to maintain 60fps cap
      lastRenderTime = timestamp - (elapsed % frameInterval);

      timer.update(timestamp);
      const delta = timer.getDelta();
      time += delta * 0.2; // Slow animation

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      material.uniforms.u_time.value = time;
      material.uniforms.u_mouse.value.set(currentMouseX, currentMouseY);

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();

      if (mountNode && renderer.domElement) {
        try {
          mountNode.removeChild(renderer.domElement);
        } catch (e) {
          // ignore error if already removed
        }
      }

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });

      renderer.forceContextLoss();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 1, transition: "opacity 0.5s ease" }}
    />
  );
}
