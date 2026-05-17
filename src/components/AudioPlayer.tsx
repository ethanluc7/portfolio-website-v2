import { useTheme } from "../context/ThemeContext";
import Slider from "./Slider";

export default function AudioPlayer() {
  const {
    activeSong,
    theme,
    isPlaying,
    progress,
    togglePlay,
    seek,
    volume,
    setVolume,
    isMuted,
    toggleMute,
  } = useTheme();

  if (!activeSong.audioSrc) return null;

  return (
    <div
      className="flex items-center gap-3 mt-4 px-3 py-2 rounded-full transition-all duration-700"
      style={{ backgroundColor: `${theme.border}30` }}
    >
      <button
        onClick={togglePlay}
        className="shrink-0 transition-colors duration-700 hover:opacity-70"
        style={{ color: theme.text }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <Slider
        value={progress}
        onChange={seek}
        trackColor={`${theme.border}80`}
        fillColor={theme.accent}
        className="flex-1"
      />

      <button
        onClick={toggleMute}
        className="shrink-0 transition-colors duration-700 hover:opacity-70"
        style={{ color: isMuted ? theme.textSecondary : theme.text }}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted || volume === 0 ? (
          <svg
            width="12"
            height="12"
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
            width="12"
            height="12"
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
            width="12"
            height="12"
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

      <Slider
        value={isMuted ? 0 : volume}
        onChange={setVolume}
        trackColor={`${theme.border}80`}
        fillColor={theme.accent}
        className="w-12"
      />
    </div>
  );
}
