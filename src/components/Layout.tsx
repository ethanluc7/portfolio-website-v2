import { useEffect } from "react";
import { Outlet } from "react-router";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import StarBackdrop from "./backdrops/StarBackdrop";
import OceanBackdrop from "./backdrops/OceanBackdrop";
import MountainBackdrop from "./backdrops/MountainBackdrop";
import PetalBackdrop from "./backdrops/PetalBackdrop";
import FloatingPlayer from "./FloatingPlayer";

function ThemedLayout() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.style.backgroundColor = theme.bg;
    document.body.style.backgroundColor = theme.bg;
  }, [theme.bg]);

  return (
    <div
      className="relative min-h-screen transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <StarBackdrop />
      <OceanBackdrop />
      <MountainBackdrop />
      <PetalBackdrop />
      <div className="relative z-10 mx-auto max-w-xl px-6 pt-10 pb-18 sm:pt-12 sm:pb-16">
        <Outlet />
      </div>
      <FloatingPlayer />
    </div>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}
