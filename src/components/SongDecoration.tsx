import { useTheme } from "../context/ThemeContext";

export default function SongDecoration() {
  const { activeSong, theme } = useTheme();

  if (!activeSong) return null;

  const color = theme.accent;

  return (
    <div className="absolute right-full mr-4 top-0 transition-all duration-700 pointer-events-none">
      {activeSong.id === "will-i-ever-see-you-again" && (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#f5d6bb">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
      {activeSong.id === "love-in-your-eyes" && (
        <svg width="32" height="20" viewBox="0 0 32 20" fill={color}>
          <path d="M0 20 L6 8 L10 12 L16 2 L22 12 L26 8 L32 20 Z" />
        </svg>
      )}
      {activeSong.id === "distant-love" && (
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none">
          {/* Petals */}
          <ellipse
            cx="13"
            cy="8"
            rx="4"
            ry="5.5"
            fill={color}
            transform="rotate(-10 13 8)"
          />
          <ellipse
            cx="10"
            cy="10"
            rx="3.5"
            ry="5"
            fill={color}
            opacity="0.85"
            transform="rotate(-30 10 10)"
          />
          <ellipse
            cx="16"
            cy="10"
            rx="3.5"
            ry="5"
            fill={color}
            opacity="0.85"
            transform="rotate(30 16 10)"
          />
          <ellipse
            cx="9"
            cy="13"
            rx="3"
            ry="4.5"
            fill={color}
            opacity="0.7"
            transform="rotate(-50 9 13)"
          />
          <ellipse
            cx="17"
            cy="13"
            rx="3"
            ry="4.5"
            fill={color}
            opacity="0.7"
            transform="rotate(50 17 13)"
          />
          {/* Center spiral */}
          <circle cx="13" cy="10" r="2.5" fill={color} opacity="0.5" />
          {/* Stem */}
          <path
            d="M13 16 Q12 22 13 28"
            stroke="#2a5a3a"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Leaf */}
          <path
            d="M13 22 Q9 19 8 21 Q9 23 13 22"
            fill="#2a5a3a"
            opacity="0.7"
          />
        </svg>
      )}
      {activeSong.id === "eau" && (
        <svg width="30" height="18" viewBox="0 0 30 18" fill={color}>
          <path
            d="M0 12 Q5 6 10 12 Q15 18 20 12 Q25 6 30 12 L30 18 L0 18 Z"
            opacity="0.8"
          />
          <path
            d="M0 8 Q5 2 10 8 Q15 14 20 8 Q25 2 30 8"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      )}
    </div>
  );
}
