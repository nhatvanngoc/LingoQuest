"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(37,99,235,0.15)",
  disableTilt = false,
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  disableTilt?: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    
    if (!disableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((e.clientX - rect.left - centerX) / centerX) * 5;
      const rotateX = ((centerY - (e.clientY - rect.top)) / centerY) * 5;
      setRotate({ x: rotateX, y: rotateY });
    }
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => {
        setOpacity(0);
        setRotate({ x: 0, y: 0 });
      }}
      animate={
        disableTilt
          ? {}
          : {
              rotateX: rotate.x,
              rotateY: rotate.y,
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 } as any}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft",
        "transition-all duration-300 will-change-transform",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: opacity * 0.5,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr", className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = "col-span-1",
  rowSpan = "",
  spotlight = true,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  spotlight?: boolean;
}) {
  const CardContent = (
    <div className={cn("h-full", colSpan, rowSpan, className)}>{children}</div>
  );

  if (!spotlight) return <div className={cn("rounded-3xl border border-slate-100 bg-white shadow-soft", colSpan, rowSpan, className)}>{children}</div>;

  return (
    <SpotlightCard className={cn(colSpan, rowSpan, className)}>
      {children}
    </SpotlightCard>
  );
}
