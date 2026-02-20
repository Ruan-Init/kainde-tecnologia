"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let THREE: any;

    async function init() {
      THREE = await import("three");

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas!.clientWidth / canvas!.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 8);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas!,
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      });
      renderer.setSize(canvas!.clientWidth, canvas!.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);

      const particles: any[] = [];
      const geometry = new THREE.OctahedronGeometry(0.08, 0);
      const matRed = new THREE.MeshBasicMaterial({ color: 0xc1121f, transparent: true, opacity: 0.8 });
      const matGray = new THREE.MeshBasicMaterial({ color: 0x3d3d3d, transparent: true, opacity: 0.4 });
      const matDim = new THREE.MeshBasicMaterial({ color: 0x1a1a1a, transparent: true, opacity: 0.3 });

      const count = 60;
      for (let i = 0; i < count; i++) {
        const mat = i % 8 === 0 ? matRed : i % 3 === 0 ? matGray : matDim;
        const mesh = new THREE.Mesh(geometry, mat);
        mesh.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 6
        );
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        (mesh as any)._speed = {
          y: (Math.random() - 0.5) * 0.003,
          rotX: (Math.random() - 0.5) * 0.01,
          rotZ: (Math.random() - 0.5) * 0.008,
          phase: Math.random() * Math.PI * 2,
        };
        scene.add(mesh);
        particles.push(mesh);
      }

      const hexGeo = new THREE.TorusGeometry(4, 0.02, 6, 6);
      const hexMat = new THREE.MeshBasicMaterial({ color: 0xc1121f, transparent: true, opacity: 0.06 });
      const hex = new THREE.Mesh(hexGeo, hexMat);
      hex.rotation.z = Math.PI / 6;
      scene.add(hex);

      const hexGeo2 = new THREE.TorusGeometry(2.5, 0.015, 6, 6);
      const hexMat2 = new THREE.MeshBasicMaterial({ color: 0xc1121f, transparent: true, opacity: 0.04 });
      const hex2 = new THREE.Mesh(hexGeo2, hexMat2);
      hex2.rotation.z = Math.PI / 6;
      scene.add(hex2);

      let mouse = { x: 0, y: 0 };
      const onMouseMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.5;
      };
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      const onResize = () => {
        if (!canvas) return;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      };
      window.addEventListener("resize", onResize);

      let t = 0;
      const animate = () => {
        animRef.current = requestAnimationFrame(animate);
        t += 0.016;

        camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.03;
        camera.position.y += (mouse.y * 1.0 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);

        particles.forEach((p) => {
          const s = (p as any)._speed;
          p.position.y += s.y;
          p.rotation.x += s.rotX;
          p.rotation.z += s.rotZ;
          p.position.y += Math.sin(t + s.phase) * 0.002;
          if (p.position.y > 8) p.position.y = -8;
          if (p.position.y < -8) p.position.y = 8;
        });

        hex.rotation.z += 0.001;
        hex2.rotation.z -= 0.0015;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animRef.current);
        renderer.dispose();
        geometry.dispose();
        matRed.dispose();
        matGray.dispose();
        matDim.dispose();
        hexGeo.dispose();
        hexMat.dispose();
        hexGeo2.dispose();
        hexMat2.dispose();
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => { cleanup = fn; });
    return () => {
      cancelAnimationFrame(animRef.current);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}