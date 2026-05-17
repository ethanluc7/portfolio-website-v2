import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  buildLeafPath,
  mainVineLeafPositions,
  smallVineLeafPositions,
} from "../../data/leafPositions";

const petals = [
  { x: -5, delay: 0, duration: 8, size: 10 },
  { x: 5, delay: 2, duration: 10, size: 8 },
  { x: 10, delay: 5.5, duration: 9, size: 12 },
  { x: 15, delay: 1, duration: 11, size: 9 },
  { x: 20, delay: 3.5, duration: 8.5, size: 11 },
  { x: 25, delay: 6, duration: 10, size: 8 },
  { x: 30, delay: 0.5, duration: 9.5, size: 10 },
  { x: 35, delay: 7, duration: 8, size: 7 },
  { x: 40, delay: 2.5, duration: 11, size: 9 },
  { x: 45, delay: 4, duration: 9, size: 10 },
  { x: 50, delay: 8, duration: 10, size: 8 },
  { x: 55, delay: 1.5, duration: 9, size: 11 },
  { x: 60, delay: 3, duration: 8.5, size: 9 },
  { x: 65, delay: 6.5, duration: 10, size: 10 },
  { x: 70, delay: 0.8, duration: 9, size: 8 },
  { x: 75, delay: 4.5, duration: 11, size: 12 },
  { x: 80, delay: 2, duration: 8, size: 7 },
  { x: 85, delay: 5, duration: 9.5, size: 10 },
  { x: 90, delay: 7.5, duration: 10, size: 9 },
  { x: 95, delay: 1.2, duration: 8.5, size: 11 },
  { x: 8, delay: 9, duration: 10, size: 8 },
  { x: 28, delay: 3.8, duration: 9, size: 10 },
  { x: 48, delay: 6.2, duration: 11, size: 9 },
  { x: 68, delay: 1.8, duration: 8, size: 12 },
  { x: 88, delay: 4.2, duration: 9.5, size: 8 },
];

export default function PetalBackdrop() {
  const { activeSong } = useTheme();
  const [leafLayerOpacity, setLeafLayerOpacity] = useState(() =>
    window.innerWidth > 650 ? 1 : 0.6,
  );

  useEffect(() => {
    const updateLeafLayerOpacity = () => {
      setLeafLayerOpacity(window.innerWidth > 650 ? 1 : 0.6);
    };

    window.addEventListener("resize", updateLeafLayerOpacity);
    return () => window.removeEventListener("resize", updateLeafLayerOpacity);
  }, []);

  if (activeSong?.id !== "distant-love") return null;

  return (
    <div
      key="petalbackdrop"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden animate-backdrop-in"
    >
      {/* Climbing roses - right side, growing upward from bottom */}
      <svg
        className="absolute bottom-0 right-0"
        width="200"
        height="100%"
        preserveAspectRatio="xMaxYMax meet"
        viewBox="0 0 200 800"
        opacity={leafLayerOpacity}
      >
        {/* Main vine stem climbing up */}
        <path
          d="M160 800 Q140 720 155 660 Q170 600 145 540 Q120 480 140 420 Q160 360 135 300 Q115 250 130 190 Q145 140 125 80"
          stroke="#1a3a28"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />
        {/* Secondary vine */}
        <path
          d="M180 800 Q190 740 175 680 Q160 630 178 570 Q195 510 170 450 Q160 430 148 412"
          stroke="#1a3a28"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Rose 1 - bottom, largest */}
        <ellipse
          cx="155"
          cy="660"
          rx="28"
          ry="35"
          fill="#d44a3a"
          transform="rotate(-10 155 660)"
        />
        <ellipse
          cx="140"
          cy="668"
          rx="22"
          ry="30"
          fill="#d44a3a"
          transform="rotate(-35 140 668)"
        />
        <ellipse
          cx="170"
          cy="668"
          rx="22"
          ry="30"
          fill="#d44a3a"
          transform="rotate(25 170 668)"
        />
        <ellipse
          cx="138"
          cy="680"
          rx="18"
          ry="26"
          fill="#d44a3a"
          transform="rotate(-55 138 680)"
        />
        <ellipse
          cx="172"
          cy="680"
          rx="18"
          ry="26"
          fill="#d44a3a"
          transform="rotate(50 172 680)"
        />
        <circle cx="155" cy="672" r="12" fill="#b03828" opacity="0.6" />

        {/* Rose 2 */}
        <ellipse
          cx="140"
          cy="530"
          rx="22"
          ry="28"
          fill="#d44a3a"
          transform="rotate(15 140 530)"
        />
        <ellipse
          cx="128"
          cy="536"
          rx="18"
          ry="24"
          fill="#d44a3a"
          transform="rotate(-20 128 536)"
        />
        <ellipse
          cx="152"
          cy="536"
          rx="18"
          ry="24"
          fill="#d44a3a"
          transform="rotate(40 152 536)"
        />
        <ellipse
          cx="126"
          cy="546"
          rx="15"
          ry="20"
          fill="#d44a3a"
          transform="rotate(-45 126 546)"
        />
        <circle cx="140" cy="540" r="10" fill="#b03828" opacity="0.5" />

        {/* Rose 3 */}
        <ellipse
          cx="175"
          cy="570"
          rx="18"
          ry="22"
          fill="#d44a3a"
          transform="rotate(-5 175 570)"
        />
        <ellipse
          cx="165"
          cy="575"
          rx="14"
          ry="18"
          fill="#d44a3a"
          transform="rotate(-30 165 575)"
        />
        <ellipse
          cx="185"
          cy="575"
          rx="14"
          ry="18"
          fill="#d44a3a"
          transform="rotate(30 185 575)"
        />
        <circle cx="175" cy="574" r="8" fill="#b03828" opacity="0.5" />

        {/* Rose 4 - higher up */}
        <ellipse
          cx="145"
          cy="410"
          rx="20"
          ry="25"
          fill="#d44a3a"
          transform="rotate(10 145 410)"
        />
        <ellipse
          cx="134"
          cy="416"
          rx="16"
          ry="22"
          fill="#d44a3a"
          transform="rotate(-25 134 416)"
        />
        <ellipse
          cx="156"
          cy="416"
          rx="16"
          ry="22"
          fill="#d44a3a"
          transform="rotate(35 156 416)"
        />
        <circle cx="145" cy="414" r="9" fill="#b03828" opacity="0.5" />

        {/* Rose 5 - small bud */}
        <ellipse
          cx="130"
          cy="300"
          rx="14"
          ry="18"
          fill="#d44a3a"
          transform="rotate(-15 130 300)"
        />
        <ellipse
          cx="122"
          cy="305"
          rx="10"
          ry="14"
          fill="#d44a3a"
          transform="rotate(-40 122 305)"
        />
        <ellipse
          cx="138"
          cy="305"
          rx="10"
          ry="14"
          fill="#d44a3a"
          transform="rotate(25 138 305)"
        />
        <circle cx="130" cy="303" r="6" fill="#b03828" opacity="0.5" />

        {/* Rose 6 - small, near top */}
        <ellipse
          cx="128"
          cy="190"
          rx="12"
          ry="15"
          fill="#d44a3a"
          transform="rotate(5 128 190)"
        />
        <ellipse
          cx="120"
          cy="194"
          rx="9"
          ry="12"
          fill="#d44a3a"
          transform="rotate(-30 120 194)"
        />
        <ellipse
          cx="136"
          cy="194"
          rx="9"
          ry="12"
          fill="#d44a3a"
          transform="rotate(30 136 194)"
        />
        <circle cx="128" cy="193" r="5" fill="#b03828" opacity="0.4" />

        {/* Leaves scattered along vines */}
        {/* Leaf 9 (main vine, lowest) */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf9)}
          fill="#1a3a28"
        />
        {/* Leaf 6 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf6)}
          fill="#1a3a28"
        />
        {/* Leaf 5 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf5)}
          fill="#1a3a28"
        />
        {/* Leaf 4 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf4)}
          fill="#1a3a28"
        />
        {/* Leaf 3 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf3)}
          fill="#1a3a28"
        />
        {/* Leaf 2 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf2)}
          fill="#1a3a28"
        />
        {/* Leaf 1 (main vine, top-most) */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf1)}
          fill="#1a3a28"
        />
        {/* Leaf 7 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf7)}
          fill="#1a3a28"
        />
        {/* Leaf 8 */}
        <path
          d={buildLeafPath(mainVineLeafPositions.leaf8)}
          fill="#1a3a28"
        />

        {/* Rose 7 - bottom right edge */}
        <ellipse
          cx="185"
          cy="750"
          rx="24"
          ry="30"
          fill="#d44a3a"
          transform="rotate(20 185 750)"
        />
        <ellipse
          cx="175"
          cy="756"
          rx="20"
          ry="26"
          fill="#d44a3a"
          transform="rotate(-15 175 756)"
        />
        <ellipse
          cx="195"
          cy="756"
          rx="20"
          ry="26"
          fill="#d44a3a"
          transform="rotate(45 195 756)"
        />
        <circle cx="185" cy="754" r="10" fill="#b03828" opacity="0.5" />
      </svg>

      {/* Small climbing vine - bottom left corner */}
      <svg
        className="absolute bottom-0 left-0"
        width="120"
        height="40%"
        preserveAspectRatio="xMinYMax meet"
        viewBox="0 0 120 400"
        opacity={leafLayerOpacity}
      >
        <path
          d="M30 400 Q20 350 35 300 Q50 260 30 220 Q15 180 35 140"
          stroke="#1a3a28"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        {/* Rose */}
        <ellipse
          cx="35"
          cy="290"
          rx="18"
          ry="22"
          fill="#d44a3a"
          transform="rotate(-10 35 290)"
        />
        <ellipse
          cx="25"
          cy="295"
          rx="14"
          ry="18"
          fill="#d44a3a"
          transform="rotate(-35 25 295)"
        />
        <ellipse
          cx="45"
          cy="295"
          rx="14"
          ry="18"
          fill="#d44a3a"
          transform="rotate(25 45 295)"
        />
        <circle cx="35" cy="293" r="8" fill="#b03828" opacity="0.5" />
        {/* Small bud */}
        <ellipse
          cx="30"
          cy="210"
          rx="10"
          ry="13"
          fill="#d44a3a"
          transform="rotate(10 30 210)"
        />
        <ellipse
          cx="24"
          cy="214"
          rx="8"
          ry="10"
          fill="#d44a3a"
          transform="rotate(-25 24 214)"
        />
        <circle cx="30" cy="212" r="5" fill="#b03828" opacity="0.4" />
        {/* Leaves */}
        {/* Leaf 12 (small vine, lowest) */}
        <path
          d={buildLeafPath(smallVineLeafPositions.leaf12)}
          fill="#1a3a28"
        />
        {/* Leaf 11 */}
        <path
          d={buildLeafPath(smallVineLeafPositions.leaf11)}
          fill="#1a3a28"
        />
        {/* Leaf 10 (small vine, top-most) */}
        <path
          d={buildLeafPath(smallVineLeafPositions.leaf10)}
          fill="#1a3a28"
        />
      </svg>

      {/* Falling petals */}
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute animate-petal"
          style={{
            left: `${petal.x}%`,
            top: "-20px",
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 10 13"
            className="animate-petal-spin"
            style={{
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration * 0.8}s`,
            }}
          >
            <ellipse
              cx="5"
              cy="6.5"
              rx="4.5"
              ry="6"
              fill="rgba(212,74,58,0.25)"
              transform="rotate(-15 5 6.5)"
            />
            <ellipse
              cx="5"
              cy="6.5"
              rx="3"
              ry="5"
              fill="rgba(212,74,58,0.15)"
              transform="rotate(10 5 6.5)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
