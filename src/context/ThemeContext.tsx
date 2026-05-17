import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { songs, type Song, type SongTheme } from "../data/songs";

// Use a <video> element — Chrome allows muted autoplay for video but not audio
const globalAudio = document.createElement("video");
globalAudio.preload = "auto";
globalAudio.muted = true;
globalAudio.volume = 0;
globalAudio.setAttribute("muted", "");
globalAudio.style.display = "none";
document.body.appendChild(globalAudio);

// Start playing the first song immediately (muted)
if (songs[0].audioSrc) {
  globalAudio.src = songs[0].audioSrc;
  globalAudio.play().catch(() => {});
}

interface ThemeContextValue {
  activeSong: Song;
  theme: SongTheme;
  setActiveSong: (song: Song) => void;
  nextSong: () => void;
  audioRef: { current: HTMLVideoElement };
  isPlaying: boolean;
  progress: number;
  togglePlay: () => void;
  seek: (ratio: number) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  activeSong: songs[0],
  theme: songs[0].theme,
  setActiveSong: () => {},
  nextSong: () => {},
  audioRef: { current: globalAudio },
  isPlaying: false,
  progress: 0,
  togglePlay: () => {},
  seek: () => {},
  menuOpen: true,
  setMenuOpen: () => {},
  volume: 0.2,
  setVolume: () => {},
  isMuted: true,
  toggleMute: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeSong, setActiveSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasInteracted = useRef(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [volume, setVolumeState] = useState(0.2);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(globalAudio);
  const theme = activeSong.theme;

  const nextSong = useCallback(() => {
    const currentIndex = songs.findIndex((s) => s.id === activeSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setActiveSong(songs[nextIndex]);
  }, [activeSong]);

  // Unmute on first click anywhere
  useEffect(() => {
    function handleFirstInteraction() {
      hasInteracted.current = true;
      globalAudio.muted = false;
      globalAudio.volume = volume;
      setIsMuted(false);
      // If autoplay was blocked, start playback now with user gesture
      if (globalAudio.paused && globalAudio.src) {
        globalAudio.play().catch(() => {});
      }
    }

    document.addEventListener("click", handleFirstInteraction, { once: true });
    return () =>
      document.removeEventListener("click", handleFirstInteraction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When song changes, load and play the new source
  useEffect(() => {
    if (!activeSong.audioSrc) return;

    const resolvedSrc = new URL(activeSong.audioSrc, window.location.href).href;
    const srcChanged = globalAudio.src !== resolvedSrc;

    if (srcChanged) {
      globalAudio.src = activeSong.audioSrc;
    }

    globalAudio.muted = !hasInteracted.current;

    // Only call play if src changed or audio is paused
    if (srcChanged || globalAudio.paused) {
      globalAudio.play().catch(() => {});
    }
  }, [activeSong]);

  // Audio event listeners
  useEffect(() => {
    // Sync initial state — audio may already be playing from module-level start
    setIsPlaying(!globalAudio.paused);

    function onPlay() {
      setIsPlaying(true);
    }
    function onPause() {
      setIsPlaying(false);
    }
    function onEnded() {
      nextSong();
    }
    function onTimeUpdate() {
      if (globalAudio.duration) {
        setProgress(globalAudio.currentTime / globalAudio.duration);
      }
    }

    globalAudio.addEventListener("play", onPlay);
    globalAudio.addEventListener("pause", onPause);
    globalAudio.addEventListener("ended", onEnded);
    globalAudio.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      globalAudio.removeEventListener("play", onPlay);
      globalAudio.removeEventListener("pause", onPause);
      globalAudio.removeEventListener("ended", onEnded);
      globalAudio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [nextSong]);

  // Sync volume
  useEffect(() => {
    globalAudio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  function togglePlay() {
    if (!activeSong.audioSrc) return;
    hasInteracted.current = true;
    if (isPlaying) {
      globalAudio.pause();
    } else {
      globalAudio.muted = false;
      setIsMuted(false);
      globalAudio.play().catch(() => {});
    }
  }

  function setVolume(v: number) {
    setVolumeState(v);
    if (v > 0 && isMuted) setIsMuted(false);
  }

  function toggleMute() {
    setIsMuted((m) => !m);
  }

  function seek(ratio: number) {
    if (!globalAudio.duration) return;
    globalAudio.currentTime = ratio * globalAudio.duration;
  }

  return (
    <ThemeContext
      value={{
        activeSong,
        theme,
        setActiveSong,
        nextSong,
        audioRef,
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
      }}
    >
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
