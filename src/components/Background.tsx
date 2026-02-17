"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles, Float, MeshDistortMaterial, TorusKnot } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedStars() {
    const starsRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (starsRef.current) {
            // Use delta for consistent speed regardless of framerate
            starsRef.current.rotation.y += delta * 0.05;
            starsRef.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

function HeroElement() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);

    const { viewport } = useThree();
    // Responsive scale: if viewport is small (mobile), scale down
    const scale = viewport.width < 5 ? 0.6 : 1;

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }

        // Scroll Logic for Opacity and Position
        // Mimicking behavior: opacity 0.6 -> 0 over 0-800px scroll
        if (materialRef.current) {
            const scrollY = window.scrollY;
            const opacity = Math.max(0, 0.6 - (scrollY / 800) * 0.6);
            materialRef.current.opacity = opacity;

            // Optimization: Hide if invisible
            meshRef.current!.visible = opacity > 0;

            // Optional: Parallax Y movement (0 to 200px equivalent in roughly viewport units)
            // 200px is roughly 2 units in Threejs at this distance? Let's just keep position fixed for now as per original request to not move much.
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} scale={scale}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#00f0ff"
                    emissive="#0000ff"
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={2}
                    wireframe={true}
                    transparent={true}
                    opacity={0.6}
                />
            </TorusKnot>
        </Float>
    );
}

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-brand-black">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{
                    powerPreference: "high-performance",
                    antialias: false, // Performance optimization
                    stencil: false,
                    depth: false // Stars/Sparkles typically don't need depth write/test if they are background
                }}
                dpr={[1, 2]} // Limit pixel ratio for performance
            >
                <fog attach="fog" args={['#050510', 5, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={5} color="#00f0ff" />

                <AnimatedStars />
                <HeroElement />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Sparkles
                        count={200}
                        scale={10}
                        size={2}
                        speed={0.4}
                        opacity={0.5}
                        color="#00f0ff"
                    />
                </Float>
            </Canvas>

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/20 to-brand-black pointer-events-none" />
        </div>
    );
}
