"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Velocity Skew Effect
    const handleScroll = (e: any) => {
      const velocity = e.velocity;
      document.body.style.transform = `skewY(${velocity * 0.1}deg)`;
      document.body.style.transition = "transform 0.1s ease-out";

      // Reset skew when stopped
      if (Math.abs(velocity) < 0.1) {
        document.body.style.transform = `skewY(0deg)`;
      }
    };

    // Note: Implementing body skew can be jarring. Let's try a subtler content skew or skip if too aggressive.
    // User requested "Global Smooth Scroll Velocity Skew".
    // Better approach: wrap children in a div and skew that.

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
