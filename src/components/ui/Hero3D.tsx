"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, TorusKnot, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import { motion, useScroll, useTransform } from "framer-motion";

function RotatingCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
                <MeshDistortMaterial
                    color="#00f0ff"
                    emissive="#0000ff"
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={1}
                    distort={0.4}
                    speed={2}
                    wireframe={true} // Techy look
                />
            </TorusKnot>
        </Float>
    );
}

export default function Hero3D() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 800], [0.6, 0]);
    const y = useTransform(scrollY, [0, 800], [0, 200]); // Subtle parallax (moves down slightly as you scroll down) or 0 for sticking.
    // User said "not move with text". Text moves up (scrolls). If we keep this Fixed at 0, it stays. 
    // Let's keep it fixed (CSS) but maybe fade it out.

    return (
        <motion.div
            style={{ opacity }}
            className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={5} color="#00f0ff" />
                <RotatingCore />
            </Canvas>
        </motion.div>
    );
}
