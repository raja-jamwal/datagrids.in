"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  radius: number;
  circleRadius: number;
  whiteCircle: number;
  duration: number;
};

const Flame = (props: Props) => {
  const { radius, circleRadius, whiteCircle, duration } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = circleRadius;

    function drawShimmeringCircle() {
      if (!ctx) return;
      // Slightly vary the gradient stop positions for shimmer effect
      let shimmerOffset = Math.sin(Date.now() / 700) * 0.05;
      let boundaryShimmer = Math.sin(Date.now() / 500) * 0.05;

      let gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        radius,
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(
        whiteCircle + shimmerOffset,
        "rgba(255, 255, 0, 0.9)",
      );
      gradient.addColorStop(0.8 + shimmerOffset, "rgba(255, 165, 0, 0.7)");
      let b = 0.5 + boundaryShimmer;
      gradient.addColorStop(1, "rgba(255, 69, 0, " + b + ")");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    function animate() {
      if (!canvas) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawShimmeringCircle();
      requestAnimationFrame(animate);
    }

    animate();
  }, [props]);

  return (
    <div className="absolute top-0 left-0 z-[-1] w-full flex items-center justify-center h-screen">
      <canvas ref={canvasRef} width={radius} height={radius}></canvas>
    </div>
  );
};

export default Flame;
