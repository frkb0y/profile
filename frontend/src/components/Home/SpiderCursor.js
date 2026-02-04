import React, { useEffect, useRef } from "react";

function SpiderCursor() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const floatersRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const maxPoints = 70;
    const maxFloaters = 200;
    const maxConnections = 3;
    const mouse = { x: width / 2, y: height / 2 };

    const seedFloaters = () => {
      floatersRef.current = Array.from({ length: maxFloaters }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    seedFloaters();

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      pointsRef.current.push({ x: mouse.x, y: mouse.y });
      if (pointsRef.current.length > maxPoints) {
        pointsRef.current.shift();
      }
    };

    window.addEventListener("mousemove", onMove);

    let animationId;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const floaters = floatersRef.current;
      for (let i = 0; i < floaters.length; i += 1) {
        const p = floaters[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      const points = pointsRef.current;
      const allPoints = [...floaters, ...points, mouse];

      if (allPoints.length > 1) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 1.5;

        for (let i = 0; i < allPoints.length; i += 1) {
          const distances = [];
          for (let j = 0; j < allPoints.length; j += 1) {
            if (i === j) continue;
            const dx = allPoints[i].x - allPoints[j].x;
            const dy = allPoints[i].y - allPoints[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 220) {
              distances.push({ index: j, dist });
            }
          }

          distances.sort((a, b) => a.dist - b.dist);
          for (let k = 0; k < Math.min(maxConnections, distances.length); k += 1) {
            const target = allPoints[distances[k].index];
            const dist = distances[k].dist;
            ctx.globalAlpha = 1 - dist / 220;
            ctx.beginPath();
            ctx.moveTo(allPoints[i].x, allPoints[i].y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        }
      }

      if (floaters.length > 0) {
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        for (let i = 0; i < floaters.length; i += 1) {
          ctx.beginPath();
          ctx.arc(floaters[i].x, floaters[i].y, 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="spider-cursor-canvas" />;
}

export default SpiderCursor;
