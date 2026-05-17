import { useTheme } from "../context/ThemeContext";
import Slider from "./Slider";

export default function FloatingPlayer() {
  const {
    activeSong,
    theme,
    isPlaying,
    progress,
    togglePlay,
    seek,
    menuOpen,
    setMenuOpen,
    volume,
    setVolume,
    isMuted,
    toggleMute,
  } = useTheme();

  if (!activeSong.audioSrc || menuOpen) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        data-floating-player
        className="flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-700 cursor-pointer origin-center max-[650px]:scale-95 max-[650px]:gap-2.5 max-[650px]:px-3.5 max-[650px]:py-2"
        style={{
          backgroundColor: `${theme.bgSecondary}dd`,
          border: `1px solid ${theme.border}`,
          boxShadow: `0 4px 20px ${theme.accent}25`,
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* Play/Pause */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="shrink-0 transition-colors duration-700 hover:opacity-70"
          style={{ color: theme.text }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Song info */}
        <div className="text-xs whitespace-nowrap">
          <span
            className="transition-colors duration-700"
            style={{ color: theme.text }}
          >
            {activeSong.title}
          </span>
          <span
            className="ml-1.5 transition-colors duration-700"
            style={{ color: theme.textSecondary }}
          >
            {activeSong.artist}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="shrink-0"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <Slider
            value={progress}
            onChange={seek}
            trackColor={`${theme.border}80`}
            fillColor={theme.accent}
            className="w-20 sm:w-32"
          />
        </div>

        {/* Volume icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="shrink-0 transition-colors duration-700 hover:opacity-70"
          style={{ color: isMuted ? theme.textSecondary : theme.text }}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : volume < 0.5 ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>

        {/* Volume slider */}
        <div
          className="shrink-0"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <Slider
            value={isMuted ? 0 : volume}
            onChange={setVolume}
            trackColor={`${theme.border}80`}
            fillColor={theme.accent}
            className="w-12"
          />
        </div>
      </div>
    </div>
  );
}
