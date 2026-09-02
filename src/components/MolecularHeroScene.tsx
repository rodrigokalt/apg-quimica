"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Enterprise Crystalline Hourglass Molecular Lattice Scene for APG Química Hero.
 *
 * Layout & Tuning:
 * - Mounted exclusively inside the Hero right-column container (hidden lg:flex w-1/2 h-[550px])
 * - Camera: position [0, 0, 11] with FOV 40
 * - Hourglass Lattice: centered at [0, 0, 0] with scale [0.85, 0.85, 0.85]
 * - Fully bounded with generous padding, zero clipping of navbar or stat metrics
 * - Struts: Delicate electric cyan cylinders (radius: 0.007) with emissive glow
 * - Palette: 50% frosted transmissive glass, 30% deep cobalt, 10% gunmetal, 10% small warm gold
 * - Transparent clear color so HTML/CSS radial backlight glow shines cleanly through
 */
export function MolecularHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const evaluateScreen = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmall = window.innerWidth < 1024;
      const eligible = !isCoarse && !isSmall;
      setIsDesktop(eligible);
    };

    evaluateScreen();

    window.addEventListener("resize", evaluateScreen);
    const mql = window.matchMedia("(pointer: coarse)");
    if (mql.addEventListener) {
      mql.addEventListener("change", evaluateScreen);
    } else {
      mql.addListener(evaluateScreen);
    }

    return () => {
      window.removeEventListener("resize", evaluateScreen);
      if (mql.removeEventListener) {
        mql.removeEventListener("change", evaluateScreen);
      } else {
        mql.removeListener(evaluateScreen);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || 550;
    let height = container.clientHeight || 550;

    // 1. Scene & Camera (FOV 40, Position [0, 0, 11])
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2("#020617", 0.025);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    // 2. WebGL Renderer with gl={{ alpha: true }} so HTML/CSS glow shows cleanly through
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // gl={{ alpha: true }}
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0); // Transparent clear color
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    renderer.domElement.id = "webgl-hero-canvas";
    renderer.domElement.setAttribute("data-testid", "hero-webgl-canvas");
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";

    container.appendChild(renderer.domElement);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    // 3. Lighting Rig (Centered relative to the [0, 0, 0] lattice origin)
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.2);
    scene.add(ambientLight);

    // Main directional key light (intensity 3.5, crisp cool-white hue)
    const keyLight = new THREE.DirectionalLight(0xf0f7ff, 3.5);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    // Dedicated intense volumetric backlight directly behind lattice waist at [0, 0, -2]
    const volumetricPointLight = new THREE.PointLight(0x0284c7, 4.0, 20);
    volumetricPointLight.position.set(0, 0, -2.0);
    scene.add(volumetricPointLight);

    // Supplemental deep navy back-fill
    const navyBackFill = new THREE.PointLight(0x1e3a8a, 3.5, 22);
    navyBackFill.position.set(0, 0, -3.0);
    scene.add(navyBackFill);

    // Front specular rim light catching frosted glass edges
    const frontRimLight = new THREE.PointLight(0x38bdf8, 2.6, 18);
    frontRimLight.position.set(0, 0.8, 6.0);
    scene.add(frontRimLight);

    // Luminous cyan accent light
    const cyanLight = new THREE.PointLight(0x00f2fe, 2.8, 18);
    cyanLight.position.set(3.5, 2.5, 3.5);
    scene.add(cyanLight);

    // Subtle gold warmth glint
    const goldLight = new THREE.PointLight(0xf5a800, 2.2, 16);
    goldLight.position.set(-2.5, -2.0, 2.5);
    scene.add(goldLight);

    // 4. Hourglass Crystalline Geometry Assembly
    const latticeGroup = new THREE.Group();
    // Centered at [0, 0, 0] with scale [0.85, 0.85, 0.85]
    latticeGroup.position.set(0, 0, 0);
    latticeGroup.scale.set(0.85, 0.85, 0.85);
    scene.add(latticeGroup);

    // Stacked Horizontal Polygonal Rings (Hourglass profile)
    // Level 0: Top rim (radius 1.8, y: +2.2)
    // Level 1: Upper taper (radius 1.25, y: +1.1)
    // Level 2: Waist (pinched to radius 0.72, y: 0.0)
    // Level 3: Lower taper (radius 1.25, y: -1.1)
    // Level 4: Bottom rim (radius 1.8, y: -2.2)
    const ringConfig = [
      { y: 2.2, radius: 1.80, count: 12, angleOffset: 0 },
      { y: 1.1, radius: 1.25, count: 12, angleOffset: Math.PI / 12 },
      { y: 0.0, radius: 0.72, count: 12, angleOffset: 0 },
      { y: -1.1, radius: 1.25, count: 12, angleOffset: Math.PI / 12 },
      { y: -2.2, radius: 1.80, count: 12, angleOffset: 0 },
    ];

    const nodePositions: THREE.Vector3[] = [];
    const ringNodeIndices: number[][] = [];

    // Generate ring nodes
    ringConfig.forEach((ring) => {
      const currentRingIndices: number[] = [];
      for (let i = 0; i < ring.count; i++) {
        const theta = (i / ring.count) * Math.PI * 2 + ring.angleOffset;
        const x = Math.cos(theta) * ring.radius;
        const z = Math.sin(theta) * ring.radius;
        const y = ring.y;
        currentRingIndices.push(nodePositions.length);
        nodePositions.push(new THREE.Vector3(x, y, z));
      }
      ringNodeIndices.push(currentRingIndices);
    });

    // Perimeter Satellites floating just outside the crystal
    const satelliteConfig = [
      // Top satellite ring
      { y: 2.4, radius: 2.45, count: 4, angleOffset: Math.PI / 4 },
      // Waist equator satellites
      { y: 0.0, radius: 1.65, count: 4, angleOffset: Math.PI / 4 },
      // Bottom satellite ring
      { y: -2.4, radius: 2.45, count: 4, angleOffset: Math.PI / 4 },
    ];

    const satelliteIndices: number[] = [];
    satelliteConfig.forEach((sat) => {
      for (let i = 0; i < sat.count; i++) {
        const theta = (i / sat.count) * Math.PI * 2 + sat.angleOffset;
        const x = Math.cos(theta) * sat.radius;
        const z = Math.sin(theta) * sat.radius;
        const y = sat.y;
        satelliteIndices.push(nodePositions.length);
        nodePositions.push(new THREE.Vector3(x, y, z));
      }
    });

    // Central core coordination nodes inside the waist
    const coreIndices: number[] = [];
    [-0.35, 0, 0.35].forEach((offsetY) => {
      coreIndices.push(nodePositions.length);
      nodePositions.push(new THREE.Vector3(0, offsetY, 0));
    });

    // Build Interconnected Bond Pairs (Circumferential + Cross-linking Truss)
    const bondPairs: [number, number][] = [];
    const bondKeySet = new Set<string>();

    const addBond = (a: number, b: number) => {
      if (a === b) return;
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (!bondKeySet.has(key)) {
        bondKeySet.add(key);
        bondPairs.push([a, b]);
      }
    };

    // A. Circumferential bonds around each ring
    ringNodeIndices.forEach((ring) => {
      const len = ring.length;
      for (let i = 0; i < len; i++) {
        addBond(ring[i], ring[(i + 1) % len]);
      }
    });

    // B. Vertical & Diagonal Cross-Linking between stacked rings (truss cage)
    for (let r = 0; r < ringNodeIndices.length - 1; r++) {
      const ringA = ringNodeIndices[r];
      const ringB = ringNodeIndices[r + 1];
      const count = ringA.length;

      for (let i = 0; i < count; i++) {
        // Vertical strut
        addBond(ringA[i], ringB[i]);
        // Diagonal cross struts creating triangulated geodesic crystal structure
        addBond(ringA[i], ringB[(i + 1) % count]);
        addBond(ringA[i], ringB[(i - 1 + count) % count]);
      }
    }

    // C. Connect satellites to adjacent ring nodes
    satelliteIndices.forEach((satIdx) => {
      const satPos = nodePositions[satIdx];
      const sorted = ringNodeIndices.flat()
        .map((rIdx) => ({ rIdx, dist: satPos.distanceTo(nodePositions[rIdx]) }))
        .sort((a, b) => a.dist - b.dist);

      if (sorted[0]) addBond(satIdx, sorted[0].rIdx);
      if (sorted[1] && sorted[1].dist < 2.0) addBond(satIdx, sorted[1].rIdx);
    });

    // D. Connect waist core nodes to the waist ring
    const waistRing = ringNodeIndices[2];
    coreIndices.forEach((cIdx) => {
      for (let i = 0; i < waistRing.length; i += 3) {
        addBond(cIdx, waistRing[i]);
      }
    });

    // 5. Strut & Bond Styling: Delicate Cylinders in Electric Cyan with Emissive Glow
    // Strut cylinder radius: 0.007 (sharp, airy, and delicate)
    const strutRadius = 0.007;
    const cylinderBaseGeo = new THREE.CylinderGeometry(strutRadius, strutRadius, 1, 8, 1);
    geometries.push(cylinderBaseGeo);

    const strutMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0ea5e9,          // Vibrant electric cyan/cerulean
      emissive: 0x38bdf8,       // Luminous emissive glow so cage network pops
      emissiveIntensity: 0.55,
      metalness: 0.85,
      roughness: 0.16,
      clearcoat: 0.85,
      clearcoatRoughness: 0.1,
    });
    materials.push(strutMaterial);

    const instancedStruts = new THREE.InstancedMesh(
      cylinderBaseGeo,
      strutMaterial,
      bondPairs.length
    );
    instancedStruts.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const vSource = new THREE.Vector3(0, 1, 0);
    const dummyMat = new THREE.Matrix4();
    const dummyPos = new THREE.Vector3();
    const dummyQuat = new THREE.Quaternion();
    const dummyScale = new THREE.Vector3();

    bondPairs.forEach(([idxA, idxB], i) => {
      const pA = nodePositions[idxA];
      const pB = nodePositions[idxB];
      dummyPos.addVectors(pA, pB).multiplyScalar(0.5);
      const dir = new THREE.Vector3().subVectors(pB, pA);
      const len = dir.length();
      dummyQuat.setFromUnitVectors(vSource, dir.normalize());
      dummyScale.set(1, len, 1);
      dummyMat.compose(dummyPos, dummyQuat, dummyScale);
      instancedStruts.setMatrixAt(i, dummyMat);
    });
    instancedStruts.instanceMatrix.needsUpdate = true;
    latticeGroup.add(instancedStruts);

    // Supplementary additive wireframe glow for optical blooming
    const linePositions: number[] = [];
    bondPairs.forEach(([idxA, idxB]) => {
      linePositions.push(
        nodePositions[idxA].x, nodePositions[idxA].y, nodePositions[idxA].z,
        nodePositions[idxB].x, nodePositions[idxB].y, nodePositions[idxB].z
      );
    });
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    geometries.push(linesGeo);

    const lineGlowMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    materials.push(lineGlowMaterial);
    const lineSegments = new THREE.LineSegments(linesGeo, lineGlowMaterial);
    latticeGroup.add(lineSegments);

    // 6. Node Palette & Sizing
    const sphereGeoStandard = new THREE.SphereGeometry(0.11, 28, 28);
    const sphereGeoJunction = new THREE.SphereGeometry(0.14, 30, 30);
    const sphereGeoAccent = new THREE.SphereGeometry(0.075, 22, 22); // Small warm gold accents
    geometries.push(sphereGeoStandard, sphereGeoJunction, sphereGeoAccent);

    // A. 50% Frosted Transmissive Glass (milky white / ice blue)
    const frostedGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf0f9ff,
      roughness: 0.15,
      transmission: 0.85,
      ior: 1.5,
      transparent: true,
      opacity: 1.0,
      thickness: 1.4,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      attenuationColor: 0xcbe5ff,
      attenuationDistance: 2.8,
    });
    materials.push(frostedGlassMaterial);

    // B. 30% Deep Cobalt Blue Glossy Nodes
    const deepCobaltMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x052b61,
      roughness: 0.12,
      metalness: 0.45,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      emissive: 0x001e47,
      emissiveIntensity: 0.28,
    });
    materials.push(deepCobaltMaterial);

    // C. 10% Dark Chrome / Gunmetal Nodes
    const gunmetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.12,
      metalness: 0.95,
      emissive: 0x0f172a,
      emissiveIntensity: 0.15,
    });
    materials.push(gunmetalMaterial);

    // D. 10% Small Warm Gold / Amber Accent Nodes
    const warmGoldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5a800,
      roughness: 0.15,
      metalness: 0.92,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      emissive: 0xf5a800,
      emissiveIntensity: 0.38,
    });
    materials.push(warmGoldMaterial);

    const nodeMeshes: THREE.Mesh[] = [];

    // Distribution:
    // 50% Frosted Glass, 30% Deep Cobalt, 10% Gunmetal, 10% Warm Gold
    nodePositions.forEach((pos, idx) => {
      let mat: THREE.Material;
      let geo: THREE.SphereGeometry;

      const mod = idx % 10;
      if (mod < 5) {
        // 50% Frosted Glass
        mat = frostedGlassMaterial;
        geo = (idx % 3 === 0) ? sphereGeoJunction : sphereGeoStandard;
      } else if (mod < 8) {
        // 30% Deep Cobalt
        mat = deepCobaltMaterial;
        geo = sphereGeoStandard;
      } else if (mod === 8) {
        // 10% Gunmetal Chrome
        mat = gunmetalMaterial;
        geo = sphereGeoStandard;
      } else {
        // 10% Small Warm Gold / Amber Accent
        mat = warmGoldMaterial;
        geo = sphereGeoAccent;
      }

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);

      mesh.userData = {
        initialY: pos.y,
        initialX: pos.x,
        initialZ: pos.z,
        phase: idx * 0.25,
      };

      latticeGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // 7. Clamped Mouse Tracking with Damped Inertia Physics
    const MAX_PITCH = Math.PI / 10; // ~18 deg
    const MAX_YAW = Math.PI / 8;    // ~22 deg

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = Math.max(-MAX_YAW, Math.min(MAX_YAW, normX * MAX_YAW));
      targetRotX = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, -normY * MAX_PITCH));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth || 550;
      height = containerRef.current.clientHeight || 550;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Smooth Animation Loop with Inertial Spring-Damper & Continuous Auto-Rotation
    let animationFrameId: number;
    let autoRotationY = 0;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Inertial spring-damper physics
      const diffX = targetRotX - currentRotX;
      const diffY = targetRotY - currentRotY;

      velocityX = velocityX * 0.90 + diffX * 0.015;
      velocityY = velocityY * 0.90 + diffY * 0.015;

      currentRotX += velocityX;
      currentRotY += velocityY;

      // Continuous slow auto-rotation (+0.003/frame) on the Y-axis combined with mouse parallax
      autoRotationY += 0.003;
      latticeGroup.rotation.y = autoRotationY + currentRotY;
      latticeGroup.rotation.x = currentRotX + Math.sin(elapsedTime * 0.28) * 0.025;

      // Organic harmonic micro-breathing of nodes & struts
      nodeMeshes.forEach((mesh) => {
        const { initialY, initialX, phase } = mesh.userData;
        mesh.position.y = initialY + Math.sin(elapsedTime * 1.0 + phase) * 0.035;
        mesh.position.x = initialX + Math.cos(elapsedTime * 0.7 + phase) * 0.025;
      });

      // Smooth orbital pathing for front specular glint
      frontRimLight.position.x = Math.sin(elapsedTime * 0.4) * 1.5;
      frontRimLight.position.y = 0.5 + Math.cos(elapsedTime * 0.35) * 1.0;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Teardown and Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Three.js canvas mounts here inside dedicated 550px right-column container */}
    </div>
  );
}
