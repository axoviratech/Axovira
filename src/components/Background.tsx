"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import { useRef } from "react";
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

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-brand-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <fog attach="fog" args={['#050510', 5, 20]} />
                <ambientLight intensity={0.5} />

                <AnimatedStars />

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
