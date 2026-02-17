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

import { useTheme } from "next-themes";

function HeroElement() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<any>(null);
    const { theme } = useTheme();

    const { viewport } = useThree();
    // Responsive scale: if viewport is small (mobile), scale down
    const scale = viewport.width < 5 ? 0.6 : 1;

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }

        // Scroll Logic for Opacity and Position
        if (materialRef.current) {
            const scrollY = window.scrollY;
            const opacity = Math.max(0, 0.6 - (scrollY / 800) * 0.6);
            materialRef.current.opacity = opacity;
            meshRef.current!.visible = opacity > 0;
        }
    });

    const isDark = theme === "dark";

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]} scale={scale}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color={isDark ? "#00f0ff" : "#0ea5e9"}
                    emissive={isDark ? "#0000ff" : "#000000"}
                    emissiveIntensity={isDark ? 2 : 0}
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

import { useEffect, useState } from "react";

export default function Background() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = theme === "dark";

    return (
        <div className="fixed inset-0 -z-10 bg-background transition-colors duration-500">
            {mounted && (
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 60 }}
                    gl={{
                        powerPreference: "high-performance",
                        antialias: false,
                        stencil: false,
                        depth: false
                    }}
                    dpr={[1, 2]}
                >
                    <fog attach="fog" args={[isDark ? '#050510' : '#ffffff', 5, 20]} />
                    <ambientLight intensity={isDark ? 0.5 : 0.8} />
                    <pointLight position={[10, 10, 10]} intensity={isDark ? 5 : 2} color={isDark ? "#00f0ff" : "#0ea5e9"} />

                    {isDark && <AnimatedStars />}
                    <HeroElement />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Sparkles
                            count={isDark ? 200 : 100}
                            scale={10}
                            size={isDark ? 2 : 4}
                            speed={0.4}
                            opacity={isDark ? 0.5 : 0.3}
                            color={isDark ? "#00f0ff" : "#0f172a"}
                        />
                    </Float>
                </Canvas>
            )}

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/10 to-background pointer-events-none" />
        </div>
    );
}
