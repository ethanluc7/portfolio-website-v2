import { useLocation } from "react-router";
import { Link } from "react-router";
import { SongMenuButton, SongDropdown } from "./SongMenu";
import SongDecoration from "./SongDecoration";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header>
      <div className="flex items-start justify-between">
        <div>
          <Link
            to="/"
            className="text-lg font-medium tracking-tight hover:opacity-70 transition-[color,opacity] duration-300"
            style={{ color: theme.text }}
          >
            ethan luc
          </Link>
          <p
            className="text-sm mt-1 transition-colors duration-700"
            style={{ color: theme.textSecondary }}
          >
            {isHome ? "math @ uwaterloo" : "lofi enthusiast"}
          </p>
        </div>
        <nav className="relative flex flex-col items-end gap-1.5">
          <SongDecoration />
          {isHome ? (
            <a
              href="#work"
              className="text-sm hover:underline underline-offset-2 transition-colors duration-700"
              style={{ color: theme.accent }}
            >
              experience
            </a>
          ) : (
            <Link
              to="/"
              className="text-sm hover:underline underline-offset-2 transition-colors duration-700"
              style={{ color: theme.textSecondary }}
            >
              experience
            </Link>
          )}
          <Link
            to="/about"
            className="text-sm hover:underline underline-offset-2 transition-colors duration-700"
            style={{ color: isHome ? theme.textSecondary : theme.accent }}
          >
            about
          </Link>
          <a
            href="https://github.com/ethanluc7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline underline-offset-2 transition-colors duration-700"
            style={{ color: theme.textSecondary }}
          >
            github
          </a>
          <SongMenuButton />
        </nav>
      </div>

      <SongDropdown />
    </header>
  );
}
