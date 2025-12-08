import { ReactNode, useRef, useLayoutEffect } from "react";
import { useLocation } from "wouter";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Out animation
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [location]);

  return (
    <div ref={containerRef} className="w-full min-h-screen">
      {children}
    </div>
  );
}
