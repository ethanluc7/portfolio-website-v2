import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const stars = [
  { x: 3, y: 3, size: 1.5, opacity: 0.4 },
  { x: 8, y: 12, size: 2, opacity: 0.6 },
  { x: 12, y: 7, size: 1, opacity: 0.35 },
  { x: 15, y: 5, size: 1.5, opacity: 0.4 },
  { x: 19, y: 22, size: 1.2, opacity: 0.3 },
  { x: 22, y: 18, size: 1, opacity: 0.3 },
  { x: 27, y: 3, size: 1.8, opacity: 0.45 },
  { x: 31, y: 14, size: 1, opacity: 0.3 },
  { x: 35, y: 8, size: 2.5, opacity: 0.5 },
  { x: 38, y: 26, size: 1.2, opacity: 0.35 },
  { x: 42, y: 22, size: 1, opacity: 0.35 },
  { x: 46, y: 2, size: 1.5, opacity: 0.4 },
  { x: 50, y: 16, size: 1.8, opacity: 0.3 },
  { x: 55, y: 6, size: 1.8, opacity: 0.45 },
  { x: 58, y: 24, size: 1, opacity: 0.25 },
  { x: 63, y: 15, size: 1.2, opacity: 0.3 },
  { x: 66, y: 4, size: 2, opacity: 0.5 },
  { x: 72, y: 4, size: 2, opacity: 0.55 },
  { x: 75, y: 19, size: 1.5, opacity: 0.35 },
  { x: 78, y: 20, size: 1.5, opacity: 0.4 },
  { x: 82, y: 9, size: 1, opacity: 0.3 },
  { x: 85, y: 10, size: 1, opacity: 0.3 },
  { x: 89, y: 2, size: 1.8, opacity: 0.45 },
  { x: 91, y: 25, size: 2, opacity: 0.5 },
  { x: 95, y: 14, size: 1.2, opacity: 0.35 },
  { x: 97, y: 6, size: 1.5, opacity: 0.4 },
  { x: 7, y: 35, size: 1.2, opacity: 0.25 },
  { x: 14, y: 40, size: 1, opacity: 0.2 },
  { x: 18, y: 35, size: 1.2, opacity: 0.25 },
  { x: 24, y: 42, size: 1.5, opacity: 0.3 },
  { x: 33, y: 38, size: 1, opacity: 0.2 },
  { x: 40, y: 45, size: 1.8, opacity: 0.25 },
  { x: 48, y: 32, size: 1.8, opacity: 0.35 },
  { x: 54, y: 40, size: 1.2, opacity: 0.2 },
  { x: 60, y: 48, size: 1.2, opacity: 0.2 },
  { x: 68, y: 38, size: 1, opacity: 0.2 },
  { x: 74, y: 44, size: 1.5, opacity: 0.25 },
  { x: 80, y: 36, size: 1, opacity: 0.2 },
  { x: 88, y: 30, size: 1.5, opacity: 0.3 },
  { x: 92, y: 42, size: 1.8, opacity: 0.3 },
  { x: 5, y: 45, size: 1, opacity: 0.2 },
  { x: 16, y: 55, size: 1.5, opacity: 0.2 },
  { x: 25, y: 52, size: 1, opacity: 0.15 },
  { x: 30, y: 50, size: 1.5, opacity: 0.25 },
  { x: 42, y: 56, size: 1.2, opacity: 0.2 },
  { x: 55, y: 53, size: 1, opacity: 0.15 },
  { x: 65, y: 58, size: 1.5, opacity: 0.2 },
  { x: 76, y: 52, size: 1.2, opacity: 0.18 },
  { x: 85, y: 55, size: 1, opacity: 0.15 },
  { x: 94, y: 50, size: 1.5, opacity: 0.2 },
];

const sparkles = [
  { x: 10, y: 6, size: 6, opacity: 0.35 },
  { x: 25, y: 10, size: 8, opacity: 0.5 },
  { x: 40, y: 4, size: 5, opacity: 0.3 },
  { x: 55, y: 20, size: 6, opacity: 0.3 },
  { x: 70, y: 7, size: 6, opacity: 0.35 },
  { x: 82, y: 18, size: 5, opacity: 0.25 },
  { x: 93, y: 8, size: 5, opacity: 0.3 },
  { x: 12, y: 25, size: 6, opacity: 0.3 },
  { x: 35, y: 30, size: 5, opacity: 0.2 },
  { x: 50, y: 28, size: 7, opacity: 0.3 },
  { x: 65, y: 35, size: 5, opacity: 0.2 },
  { x: 88, y: 40, size: 5, opacity: 0.2 },
];

export default function StarBackdrop() {
  const { activeSong } = useTheme();
  const [comet, setComet] = useState(() => ({
    x: window.innerWidth + 18,
    y: window.innerHeight * 0.12,
    vx: -Math.max(3.2, window.innerWidth / 360),
    vy: 0.5,
  }));

  useEffect(() => {
    const gravity = 0.009;
    let frameId = 0;
    let lastTime = performance.now();

    const resetComet = () => ({
      x: window.innerWidth + (12 + Math.random() * 20),
      y: window.innerHeight * (0.10 + Math.random() * 0.08),
      vx: -Math.max(3.2, window.innerWidth / 360),
      vy: 0.25 + Math.random() * 0.35,
    });

    const tick = (now: number) => {
      const dt = Math.min(2, (now - lastTime) / 16.67);
      lastTime = now;

      setComet((prev) => {
        const nextVy = prev.vy + gravity * dt;
        const nextX = prev.x + prev.vx * dt;
        const nextY = prev.y + nextVy * dt;

        // Ensure it crosses full viewport before resetting.
        if (nextX < -220 || nextY > window.innerHeight + 180) {
          return resetComet();
        }

        return { ...prev, x: nextX, y: nextY, vy: nextVy };
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (activeSong?.id !== "will-i-ever-see-you-again") return null;

  const tailAngleDeg = (Math.atan2(-comet.vy, -comet.vx) * 180) / Math.PI;

  return (
    <div
      key="starbackdrop"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden animate-backdrop-in"
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        {stars.map((star, i) => (
          <circle
            key={`star-${i}`}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="#e4d8f0"
            opacity={star.opacity}
            className="animate-twinkle"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        {sparkles.map((s, i) => (
          <g
            key={`sparkle-${i}`}
            transform={`translate(${s.x}%, ${s.y}%)`}
            opacity={s.opacity}
            className="animate-twinkle"
            style={{ animationDelay: `${i * 0.7 + 0.2}s` }}
          >
            <line
              x1={`${s.x - 0.3}%`}
              y1={`${s.y}%`}
              x2={`${s.x + 0.3}%`}
              y2={`${s.y}%`}
              stroke="#e4d8f0"
              strokeWidth="1"
            />
            <line
              x1={`${s.x}%`}
              y1={`${s.y - 0.4}%`}
              x2={`${s.x}%`}
              y2={`${s.y + 0.4}%`}
              stroke="#e4d8f0"
              strokeWidth="1"
            />
          </g>
        ))}
      </svg>

      {/* City buildings on the right */}
      <svg
        className="absolute right-0 bottom-0"
        width="180"
        height="100%"
        preserveAspectRatio="xMaxYMax meet"
        viewBox="0 0 180 600"
      >
        <g transform="translate(-20 0)">
          {/* Tall building - back */}
          <rect
            x="90"
            y="120"
            width="55"
            height="480"
            fill="rgba(50,40,70,0.35)"
            rx="2"
          />
          {/* Windows - tall building */}
          <rect
            x="100"
            y="150"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.15)"
          />
          <rect
            x="118"
            y="150"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.25)"
          />
          <rect
            x="100"
            y="175"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.2)"
          />
          <rect
            x="118"
            y="175"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.12)"
          />
          <rect
            x="100"
            y="200"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.25)"
          />
          <rect
            x="118"
            y="200"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.18)"
          />
          <rect
            x="100"
            y="225"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.12)"
          />
          <rect
            x="118"
            y="225"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.22)"
          />
          <rect
            x="100"
            y="250"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.2)"
          />
          <rect
            x="118"
            y="250"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.15)"
          />
        </g>

        {/* Medium building - front right */}
        <rect
          x="130"
          y="220"
          width="50"
          height="380"
          fill="rgba(50,40,70,0.45)"
          rx="2"
        />
        {/* Windows - medium building */}
        <rect
          x="140"
          y="245"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.2)"
        />
        <rect
          x="158"
          y="245"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.28)"
        />
        <rect
          x="140"
          y="270"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.25)"
        />
        <rect
          x="158"
          y="270"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.12)"
        />
        <rect
          x="140"
          y="295"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.15)"
        />
        <rect
          x="158"
          y="295"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.22)"
        />
        <rect
          x="140"
          y="320"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.2)"
        />
        <rect
          x="158"
          y="320"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.18)"
        />
        <rect
          x="140"
          y="345"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.12)"
        />
        <rect
          x="158"
          y="345"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.25)"
        />
        <rect
          x="140"
          y="370"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.2)"
        />
        <rect
          x="158"
          y="370"
          width="10"
          height="8"
          rx="1"
          fill="rgba(196,144,232,0.15)"
        />

        <g transform="translate(-30 0)">
          {/* Short building - front left */}
          <rect
            x="50"
            y="340"
            width="48"
            height="260"
            fill="rgba(50,40,70,0.3)"
            rx="2"
          />
          {/* Windows - short building */}
          <rect
            x="60"
            y="360"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.18)"
          />
          <rect
            x="78"
            y="360"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.22)"
          />
          <rect
            x="60"
            y="385"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.25)"
          />
          <rect
            x="78"
            y="385"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.12)"
          />
          <rect
            x="60"
            y="410"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.15)"
          />
          <rect
            x="78"
            y="410"
            width="10"
            height="8"
            rx="1"
            fill="rgba(196,144,232,0.2)"
          />
        </g>

      </svg>
      <svg
        className="absolute right-0 bottom-0"
        width="180"
        height="100%"
        preserveAspectRatio="xMaxYMax meet"
        viewBox="0 0 180 600"
      >
        {/* Warm glow at building base (foreground layer) */}
        <rect
          x="20"
          y="560"
          width="160"
          height="40"
          fill="rgba(245,214,187,0.09)"
        />
      </svg>

      {/* Shooting star / comet - parabolic path */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${comet.x}px, ${comet.y}px)`,
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: "180px",
            transform: `rotate(${tailAngleDeg}deg)`,
            transformOrigin: "left center",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#f5d6bb",
              boxShadow: "0 0 6px 2px rgba(245,214,187,0.6)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              width: "160px",
              height: "2.5px",
              borderRadius: "2px",
              background:
                "linear-gradient(to right, #f5d6bb 0%, rgba(245,214,187,0.5) 30%, rgba(228,216,240,0.2) 60%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
