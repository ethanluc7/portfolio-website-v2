import { useRef, useEffect, useState } from "react";
import { songs } from "../data/songs";
import { useTheme } from "../context/ThemeContext";
import AudioPlayer from "./AudioPlayer";

export function SongMenuButton() {
  const { menuOpen, setMenuOpen, theme } = useTheme();

  return (
    <button
      data-song-menu-button
      onClick={() => setMenuOpen(!menuOpen)}
      className="transition-all duration-300 hover:opacity-70"
      style={{ color: menuOpen ? theme.accent : theme.textSecondary }}
      aria-label="Open song picker"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    </button>
  );
}

export function SongDropdown() {
  const { menuOpen, setMenuOpen, activeSong, setActiveSong, theme } =
    useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [hasPlayedInitialOpen, setHasPlayedInitialOpen] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setHasPlayedInitialOpen(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !target.closest("[data-song-menu-button]") &&
        !target.closest("[data-floating-player]") &&
        !target.closest("nav")
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [menuOpen, setMenuOpen]);

  const isVisible = menuOpen && hasPlayedInitialOpen;

  return (
    <div
      ref={ref}
      className="overflow-hidden transition-all duration-500 ease-in-out will-change-[max-height,opacity,margin-top]"
      style={{
        maxHeight: isVisible ? "300px" : "0",
        opacity: isVisible ? 1 : 0,
        marginTop: isVisible ? "20px" : "0",
      }}
    >
      <div
        className="rounded-2xl p-5"
        style={{
          backgroundColor: theme.bgSecondary,
          border: `1px solid ${theme.border}`,
        }}
      >
        <p
          className="text-[12px] tracking-[0.2em] mb-4"
          style={{ color: theme.textSecondary }}
        >
          my fav lofi songs
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
          {songs.map((song) => {
            const isActive = activeSong?.id === song.id;
            return (
              <button
                key={song.id}
                onClick={() => {
                  if (!isActive) setActiveSong(song);
                }}
                className="group relative"
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-500"
                  style={{
                    boxShadow: isActive
                      ? `0 0 15px ${song.theme.accent}80, 0 0 40px ${song.theme.accent}50, 0 0 80px ${song.theme.accent}30`
                      : "0 1px 4px rgba(0,0,0,0.08)",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                    opacity: activeSong && !isActive ? 0.45 : 1,
                  }}
                >
                  <img
                    src={song.coverUrl}
                    alt={`${song.title} by ${song.artist}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                    }}
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute -bottom-1.5 left-1/2 w-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: isActive
                      ? song.theme.accent
                      : "transparent",
                    transform: isActive
                      ? "translateX(-50%) scale(1)"
                      : "translateX(-50%) scale(0)",
                  }}
                />
              </button>
            );
          })}
        </div>

        {activeSong && (
          <p
            className="text-xs text-center transition-all duration-500"
            style={{ color: theme.textSecondary }}
          >
            {activeSong.title}{" "}
            <span style={{ color: theme.accent }}>&#183;</span>{" "}
            {activeSong.artist}
          </p>
        )}

        <AudioPlayer />
      </div>
    </div>
  );
}
