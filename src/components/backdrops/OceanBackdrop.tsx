import { useTheme } from "../../context/ThemeContext";

export default function OceanBackdrop() {
  const { activeSong } = useTheme();

  if (activeSong?.id !== "eau") return null;

  return (
    <div
      key="ocean"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden animate-backdrop-in"
    >
      {/* Horizon mist line */}
      <div
        className="absolute w-full"
        style={{
          bottom: "28%",
          height: "80px",
          background:
            "linear-gradient(to bottom, transparent, rgba(200,216,224,0.2), transparent)",
        }}
      />

      {/* Wave layer 1 - back, slowest */}
      <svg
        className="absolute bottom-0 w-full animate-wave-1"
        style={{ height: "30%" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,224 C180,180 360,280 540,224 C720,168 900,280 1080,224 C1260,168 1350,200 1440,192 L1440,320 L0,320 Z"
          fill="rgba(90,154,181,0.25)"
        />
      </svg>

      {/* Wave layer 2 - middle */}
      <svg
        className="absolute bottom-0 w-full animate-wave-2"
        style={{ height: "25%" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,256 C120,200 240,288 480,240 C720,192 960,288 1200,240 C1320,216 1380,232 1440,224 L1440,320 L0,320 Z"
          fill="rgba(90,154,181,0.2)"
        />
      </svg>

      {/* Wave layer 3 - front, fastest */}
      <svg
        className="absolute bottom-0 w-full animate-wave-3"
        style={{ height: "20%" }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d="M0,288 C240,240 480,300 720,272 C960,244 1200,296 1440,264 L1440,320 L0,320 Z"
          fill="rgba(90,154,181,0.18)"
        />
      </svg>

      {/* Water surface shimmer */}
      <div
        className="absolute bottom-0 w-full animate-shimmer"
        style={{
          height: "22%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(90,154,181,0.06) 40%, rgba(46,100,128,0.12) 100%)",
        }}
      />
    </div>
  );
}
