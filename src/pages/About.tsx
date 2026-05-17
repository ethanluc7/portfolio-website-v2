import Header from "../components/Header";
import SocialIcons from "../components/SocialIcons";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="space-y-14">
      <Header />

      <section>
        <div className="space-y-8">
          <p
            className="leading-relaxed transition-colors duration-700"
            style={{ color: theme.text }}
          >
            hi, i'm ethan. i'm currently studying math at the university of waterloo and heading into 2b.

          </p>
          <p
            className="leading-relaxed transition-colors duration-700"
            style={{ color: theme.text }}
          >
            in my spare time, i'll probably be listening to lo-fi, playing video games, or rock climbing.
          </p>
          <p
            className="leading-relaxed transition-colors duration-700"
            style={{ color: theme.text }}
          >
            i'm always open to new opportunities and connections. feel free to reach out to me to connect via linkedin or email!
          </p>
        </div>
      </section>

      <footer>
        <SocialIcons />
      </footer>
    </div>
  );
}
