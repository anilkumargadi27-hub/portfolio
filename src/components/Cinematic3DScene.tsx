import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Cinematic3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.018);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030712, 0);
    container.appendChild(renderer.domElement);

    // 2. Dynamic Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x081326, 1.4);
    scene.add(ambientLight);

    const mainCyanLight = new THREE.PointLight(0x00f5ff, 4.0, 50);
    mainCyanLight.position.set(8, 6, 14);
    scene.add(mainCyanLight);

    const secondaryPurpleLight = new THREE.PointLight(0xa855f7, 3.5, 50);
    secondaryPurpleLight.position.set(-10, -5, 10);
    scene.add(secondaryPurpleLight);

    const hotMagentaLight = new THREE.PointLight(0xec4899, 2.5, 40);
    hotMagentaLight.position.set(0, 12, -20);
    scene.add(hotMagentaLight);

    // 3. OBJECT 1: QUANTUM AI GYROSCOPIC SINGULARITY CORE (Hero Section)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(6.8, 0.2, 5.5);

    // Glowing Inner Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x051833,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoMat);
    coreGroup.add(icoMesh);

    // Outer Wireframe Crystal Shield
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const icoWireMesh = new THREE.Mesh(icoGeom, icoWireMat);
    icoWireMesh.scale.set(1.15, 1.15, 1.15);
    coreGroup.add(icoWireMesh);

    // Gyroscopic Gimbal Ring 1 (Yaw)
    const ring1Geom = new THREE.TorusGeometry(2.8, 0.05, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: 0.7 });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    coreGroup.add(ring1);

    // Gyroscopic Gimbal Ring 2 (Pitch)
    const ring2Geom = new THREE.TorusGeometry(3.3, 0.045, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.65 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 2;
    coreGroup.add(ring2);

    // Gyroscopic Gimbal Ring 3 (Roll)
    const ring3Geom = new THREE.TorusGeometry(3.8, 0.04, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    coreGroup.add(ring3);

    // Orbiting Data Shards (Tetrahedrons)
    const shardCount = 6;
    const shards: THREE.Mesh[] = [];
    const shardGeom = new THREE.TetrahedronGeometry(0.35);
    const shardMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true });

    for (let i = 0; i < shardCount; i++) {
      const shard = new THREE.Mesh(shardGeom, shardMat);
      shards.push(shard);
      coreGroup.add(shard);
    }

    scene.add(coreGroup);

    // 4. OBJECT 2: WARP SPEED LIGHT STREAKS (Hero -> About Warp)
    const warpCount = prefersReducedMotion ? 150 : 450;
    const warpGeom = new THREE.BufferGeometry();
    const warpPositions = new Float32Array(warpCount * 6); // 2 points per line segment
    const warpColors = new Float32Array(warpCount * 6);

    for (let i = 0; i < warpCount; i++) {
      const x = (Math.random() - 0.5) * 55;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 80;
      const length = Math.random() * 6 + 4;

      // Start point
      warpPositions[i * 6] = x;
      warpPositions[i * 6 + 1] = y;
      warpPositions[i * 6 + 2] = z;

      // End point (streak)
      warpPositions[i * 6 + 3] = x;
      warpPositions[i * 6 + 4] = y;
      warpPositions[i * 6 + 5] = z - length;

      const c = Math.random() > 0.5 ? new THREE.Color(0x00f5ff) : new THREE.Color(0xa855f7);
      warpColors[i * 6] = c.r;
      warpColors[i * 6 + 1] = c.g;
      warpColors[i * 6 + 2] = c.b;
      warpColors[i * 6 + 3] = c.r * 0.2;
      warpColors[i * 6 + 4] = c.g * 0.2;
      warpColors[i * 6 + 5] = c.b * 0.2;
    }

    warpGeom.setAttribute('position', new THREE.BufferAttribute(warpPositions, 3));
    warpGeom.setAttribute('color', new THREE.BufferAttribute(warpColors, 3));

    const warpMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const warpLines = new THREE.LineSegments(warpGeom, warpMat);
    scene.add(warpLines);

    // 5. OBJECT 3: UNDULATING 3D CYBERNETIC NEURAL WAVE GRID (About -> Command Center)
    const gridCols = 45;
    const gridRows = 45;
    const waveGeom = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(gridCols * gridRows * 3);
    const waveColors = new Float32Array(gridCols * gridRows * 3);

    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const idx = (r * gridCols + c) * 3;
        wavePositions[idx] = (c - gridCols / 2) * 1.6;
        wavePositions[idx + 1] = -9; // Situated lower in viewport
        wavePositions[idx + 2] = (r - gridRows / 2) * 1.6 - 10;

        const ratio = c / gridCols;
        const color = new THREE.Color().lerpColors(
          new THREE.Color(0x00f5ff),
          new THREE.Color(0xa855f7),
          ratio
        );
        waveColors[idx] = color.r;
        waveColors[idx + 1] = color.g;
        waveColors[idx + 2] = color.b;
      }
    }

    waveGeom.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeom.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const createDotTexture = () => {
      const cvs = document.createElement('canvas');
      cvs.width = 32;
      cvs.height = 32;
      const ctx = cvs.getContext('2d')!;
      const rad = ctx.createRadialGradient(16, 16, 0, 16, 16, 15);
      rad.addColorStop(0, 'rgba(255,255,255,1)');
      rad.addColorStop(0.35, 'rgba(0,245,255,0.85)');
      rad.addColorStop(0.8, 'rgba(168,85,247,0.25)');
      rad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(cvs);
    };

    const waveMat = new THREE.PointsMaterial({
      size: 0.75,
      map: createDotTexture(),
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const wavePoints = new THREE.Points(waveGeom, waveMat);
    scene.add(wavePoints);

    // 6. OBJECT 4: CHROMATIC HYPER-TUNNEL GATES (Projects -> Skills)
    const tunnelGroup = new THREE.Group();
    const gateCount = 14;
    const tunnelGates: THREE.LineLoop[] = [];

    for (let i = 0; i < gateCount; i++) {
      const zPos = -5 - i * 9;
      const radius = 10 + Math.sin(i * 0.5) * 2.5;

      // Octagonal laser gate
      const gateGeom = new THREE.BufferGeometry();
      const gatePts: number[] = [];
      const sides = 8;
      for (let s = 0; s <= sides; s++) {
        const theta = (s / sides) * Math.PI * 2;
        gatePts.push(Math.cos(theta) * radius, Math.sin(theta) * radius, 0);
      }
      gateGeom.setAttribute('position', new THREE.Float32BufferAttribute(gatePts, 3));

      const hueChoice = i % 3;
      const gateColor = hueChoice === 0 ? 0x00f5ff : hueChoice === 1 ? 0xa855f7 : 0xec4899;
      const gateMat = new THREE.LineBasicMaterial({
        color: gateColor,
        transparent: true,
        opacity: 0.28 + (i / gateCount) * 0.18
      });

      const gateMesh = new THREE.LineLoop(gateGeom, gateMat);
      gateMesh.position.set(0, 0, zPos);
      tunnelGates.push(gateMesh);
      tunnelGroup.add(gateMesh);
    }
    scene.add(tunnelGroup);

    // 7. OBJECT 5: NEURAL HELIX / FIBONACCI SPHERE (Skills Section)
    const helixCount = prefersReducedMotion ? 250 : 600;
    const helixGeom = new THREE.BufferGeometry();
    const helixPos = new Float32Array(helixCount * 3);
    const helixCol = new Float32Array(helixCount * 3);

    for (let i = 0; i < helixCount; i++) {
      const t = i / helixCount;
      const theta = t * Math.PI * 18;
      const r = 7 + Math.sin(t * Math.PI * 3) * 3;

      helixPos[i * 3] = Math.cos(theta) * r;
      helixPos[i * 3 + 1] = (t - 0.5) * 32;
      helixPos[i * 3 + 2] = Math.sin(theta) * r - 45;

      const col = t > 0.5 ? new THREE.Color(0x00f5ff) : new THREE.Color(0xa855f7);
      helixCol[i * 3] = col.r;
      helixCol[i * 3 + 1] = col.g;
      helixCol[i * 3 + 2] = col.b;
    }
    helixGeom.setAttribute('position', new THREE.BufferAttribute(helixPos, 3));
    helixGeom.setAttribute('color', new THREE.BufferAttribute(helixCol, 3));

    const helixPoints = new THREE.Points(helixGeom, waveMat);
    scene.add(helixPoints);

    // 8. SCROLL & MOUSE INTERPOLATION
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', onResize);

    // 9. ANIMATION & CINEMATIC CAMERA FLIGHT CONTROLLER
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth buttery lerp damping
      const damping = prefersReducedMotion ? 1 : 0.085;
      currentScroll += (targetScroll - currentScroll) * damping;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollPct = Math.min(Math.max(currentScroll / docHeight, 0), 1);

      // === CINEMATIC CAMERA DOLLY & PERSPECTIVE FLIGHT ===
      if (scrollPct < 0.14) {
        // [HERO]: Front-facing framed on profile & Quantum Core
        const p = scrollPct / 0.14;
        camera.position.x = mouseX * 0.9;
        camera.position.y = -mouseY * 0.6;
        camera.position.z = 26 - p * 5;
        camera.rotation.z = mouseX * 0.02;
        camera.lookAt(0, 0, 0);

        coreGroup.position.x = 6.8 - p * 2.5;
        coreGroup.position.z = 5.5 - p * 4;
        coreGroup.scale.setScalar(1 + p * 0.35);

        // Core gyro rotations
        ring1.rotation.y = elapsed * 0.6;
        ring2.rotation.x = elapsed * 0.8;
        ring3.rotation.z = elapsed * 0.5;
      } else if (scrollPct < 0.28) {
        // [HERO -> ABOUT]: HYPERSPACE QUANTUM WARP
        // Camera accelerates and banks forward through the core aperture
        const p = (scrollPct - 0.14) / 0.14;
        camera.position.x = THREE.MathUtils.lerp(0, -4.5, p) + mouseX * 0.8;
        camera.position.y = THREE.MathUtils.lerp(0, -2.0, p) - mouseY * 0.5;
        camera.position.z = THREE.MathUtils.lerp(21, 9, p);
        camera.rotation.z = Math.sin(p * Math.PI) * 0.08 + mouseX * 0.03;
        camera.lookAt(-2, 0, -8);

        coreGroup.position.z = THREE.MathUtils.lerp(1.5, -15, p);
        coreGroup.scale.setScalar(THREE.MathUtils.lerp(1.35, 0.2, p));
        ring1.rotation.y += 0.08;
        ring2.rotation.x += 0.09;
        ring3.rotation.z += 0.07;

        // Warp speed streaks pulse past the camera
        warpMat.opacity = THREE.MathUtils.lerp(0.2, 0.85, Math.sin(p * Math.PI));
      } else if (scrollPct < 0.45) {
        // [ABOUT -> COMMAND CENTER]: UNDULATING NEURAL WAVE OCEAN
        const p = (scrollPct - 0.28) / 0.17;
        camera.position.x = THREE.MathUtils.lerp(-4.5, 4.0, p) + mouseX * 0.8;
        camera.position.y = THREE.MathUtils.lerp(-2.0, 1.5, p) - mouseY * 0.5;
        camera.position.z = THREE.MathUtils.lerp(9, 15, p);
        camera.rotation.z = -Math.sin(p * Math.PI) * 0.06;
        camera.lookAt(0, -2, -12);

        warpMat.opacity = 0.2;
      } else if (scrollPct < 0.68) {
        // [COMMAND CENTER -> PROJECTS]: CHROMATIC TUNNEL HYPER-FLIGHT
        // Camera flies directly down the octagonal corridor
        const p = (scrollPct - 0.45) / 0.23;
        camera.position.x = Math.sin(p * Math.PI * 1.5) * 3.2 + mouseX * 0.8;
        camera.position.y = Math.cos(p * Math.PI) * 1.8 - mouseY * 0.5;
        camera.position.z = THREE.MathUtils.lerp(15, -18, p);
        camera.rotation.z = Math.sin(p * Math.PI * 2) * 0.12;
        camera.lookAt(0, 0, -50);

        tunnelGroup.rotation.z = elapsed * 0.25 + p * Math.PI;

        tunnelGates.forEach((gate, gIdx) => {
          gate.rotation.z = elapsed * 0.3 + gIdx * 0.4;
          const s = 1 + Math.sin(elapsed * 2.5 + gIdx * 0.7) * 0.08;
          gate.scale.set(s, s, 1);
        });

        mainCyanLight.position.z = THREE.MathUtils.lerp(8, -30, p);
        secondaryPurpleLight.position.z = THREE.MathUtils.lerp(5, -35, p);
      } else if (scrollPct < 0.85) {
        // [PROJECTS -> SKILLS]: NEURAL HELIX REVEAL & FLIGHT
        const p = (scrollPct - 0.68) / 0.17;
        camera.position.x = THREE.MathUtils.lerp(0, -5.0, p) + mouseX * 0.7;
        camera.position.y = THREE.MathUtils.lerp(0, 2.5, p) - mouseY * 0.4;
        camera.position.z = THREE.MathUtils.lerp(-18, 4, p);
        camera.rotation.z = 0;
        camera.lookAt(0, 0, -25);

        helixPoints.rotation.y = elapsed * 0.2 + p * Math.PI;
      } else {
        // [EXPERIENCE -> CONTACT]: COSMIC NEBULA RESOLUTION
        const p = (scrollPct - 0.85) / 0.15;
        camera.position.x = mouseX * 0.5;
        camera.position.y = THREE.MathUtils.lerp(2.5, 0, p) - mouseY * 0.3;
        camera.position.z = THREE.MathUtils.lerp(4, 22, p);
        camera.rotation.z = 0;
        camera.lookAt(0, 0, 0);
      }

      // === OBJECT CONTINUOUS ANIMATIONS ===
      // Rotating core crystal
      icoMesh.rotation.x = elapsed * 0.4;
      icoMesh.rotation.y = elapsed * 0.6;
      icoWireMesh.rotation.x = -elapsed * 0.3;
      icoWireMesh.rotation.y = -elapsed * 0.5;

      // Orbiting shards in 3D ellipses
      shards.forEach((s, i) => {
        const angle = elapsed * 1.2 + (i / shardCount) * Math.PI * 2;
        const rad = 4.2 + Math.sin(elapsed + i) * 0.4;
        s.position.set(
          Math.cos(angle) * rad,
          Math.sin(angle * 1.5) * 1.5,
          Math.sin(angle) * rad
        );
        s.rotation.x = elapsed * 2;
        s.rotation.y = elapsed * 1.5;
      });

      // Undulating Cyber Wave Grid displacement
      const wavePosArr = waveGeom.attributes.position.array as Float32Array;
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          const idx = (r * gridCols + c) * 3;
          const u = c * 0.25;
          const v = r * 0.25;
          wavePosArr[idx + 1] =
            -9 +
            Math.sin(u + elapsed * 1.5) * 0.9 +
            Math.cos(v + elapsed * 1.2) * 0.9;
        }
      }
      waveGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    // 10. CLEANUP
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      // Dispose geometries & materials
      icoGeom.dispose();
      icoMat.dispose();
      icoWireMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      shardGeom.dispose();
      shardMat.dispose();
      warpGeom.dispose();
      warpMat.dispose();
      waveGeom.dispose();
      waveMat.dispose();
      helixGeom.dispose();
      tunnelGates.forEach((g) => {
        g.geometry.dispose();
        (g.material as THREE.Material).dispose();
      });
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};
