import { useTheme } from "../../context/ThemeContext";

type CloudProps = {
  animationClass: string;
  top: string;
  width: string;
  height: string;
  fill: string;
  blur: string;
  animationDelay?: string;
};

function Cloud({
  animationClass,
  top,
  width,
  height,
  fill,
  blur,
  animationDelay,
}: CloudProps) {
  return (
    <div
      className={`absolute ${animationClass}`}
      style={{ top, width, height, filter: `blur(${blur})`, animationDelay }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M28 70 C20 70, 12 63, 12 53 C12 43, 19 36, 30 35 C34 22, 49 14, 65 16 C77 8, 95 8, 106 18 C120 14, 136 20, 142 31 C160 30, 174 40, 174 53 C174 65, 164 74, 149 74 L28 74 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function MountainBackdrop() {
  const { activeSong } = useTheme();

  if (activeSong?.id !== "love-in-your-eyes") return null;

  return (
    <div
      key="mountain"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden animate-backdrop-in"
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(192,120,120,0.1) 60%, rgba(192,120,120,0.18) 100%)",
        }}
      />

      {/* Back mountains */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ height: "40%" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,320 L0,220 C100,160 200,200 320,140 C440,80 500,120 620,100 C740,80 800,130 920,90 C1040,50 1120,110 1240,80 C1320,60 1380,100 1440,90 L1440,320 Z"
          fill="rgba(42,58,80,0.4)"
        />
      </svg>

      {/* Front mountains */}
      <svg
        className="absolute bottom-0 w-full"
        style={{ height: "30%" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,320 L0,240 C120,180 240,260 400,200 C560,140 640,220 800,180 C960,140 1080,200 1200,160 C1320,130 1380,180 1440,170 L1440,320 Z"
          fill="rgba(42,58,80,0.55)"
        />
      </svg>

      {/* Drifting clouds */}
      <Cloud
        animationClass="animate-cloud-1"
        top="20%"
        width="300px"
        height="90px"
        fill="rgba(224,216,208,0.18)"
        blur="18px"
      />
      <Cloud
        animationClass="animate-cloud-2"
        top="32%"
        width="250px"
        height="75px"
        fill="rgba(224,216,208,0.15)"
        blur="15px"
      />
      <Cloud
        animationClass="animate-cloud-3"
        top="14%"
        width="350px"
        height="105px"
        fill="rgba(224,216,208,0.12)"
        blur="22px"
      />
      <Cloud
        animationClass="animate-cloud-1"
        top="40%"
        width="220px"
        height="68px"
        fill="rgba(224,216,208,0.1)"
        blur="16px"
        animationDelay="15s"
      />
    </div>
  );
}
