export interface SongTheme {
  bg: string;
  bgSecondary: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  spotifyTrackId: string;
  coverUrl: string;
  audioSrc?: string;
  theme: SongTheme;
}

export const songs: Song[] = [
  {
    id: "love-in-your-eyes",
    title: "Love In Your Eyes",
    artist: "Lee",
    album: "Lo-fi of Lee",
    spotifyTrackId: "4derjCV0PIdZIgSA96IIDQ",
    coverUrl:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0217db8dcebcc9556314cbad49",
    audioSrc: "/music/Love In Your Eyes - Lee.mp3",
    theme: {
      bg: "#2a3a50",
      bgSecondary: "#1e2e42",
      text: "#e0d8d0",
      textSecondary: "#a09498",
      accent: "#c07878",
      border: "#3d4e64",
      gradientFrom: "#1e2e42",
      gradientTo: "#253550",
    },
  },
  {
    id: "distant-love",
    title: "Distant Love",
    artist: "Eric Godlow",
    album: "Distant Love",
    spotifyTrackId: "4wipbpdgR9Gp9yIRejzDvT",
    coverUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026c05146092d256f7f82ccf15",
    audioSrc: "/music/Distant Love - Eric Godlow .mp3",
    theme: {
      bg: "#172038",
      bgSecondary: "#101828",
      text: "#e8d8d0",
      textSecondary: "#8a90a8",
      accent: "#d44a3a",
      border: "#283050",
      gradientFrom: "#101828",
      gradientTo: "#172038",
    },
  },
  {
    id: "eau",
    title: "eau",
    artist: "yutaka hirasaka",
    album: "breath",
    spotifyTrackId: "4azoV50K4s4eBkGRHSVWYV",
    coverUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026a0da0cf59058d0a479daa6d",
    audioSrc: "/music/eau - Yutaka Hirasaka.mp3",
    theme: {
      bg: "#c8d8e0",
      bgSecondary: "#b8ccd6",
      text: "#1a2e38",
      textSecondary: "#4a6a78",
      accent: "#2e6480",
      border: "#a0b8c4",
      gradientFrom: "#b8ccd6",
      gradientTo: "#c8d8e0",
    },
  },
  {
    id: "will-i-ever-see-you-again",
    title: "Will I Ever See You Again",
    artist: "Seycara Orchestral",
    album: "Illusions of the Heart",
    spotifyTrackId: "19OTzsBwlIiQNYlsbc5jv5",
    coverUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0269df15cf7d28279c42749fce",
    audioSrc: "/music/will i ever see you again - Seycara.mp3",
    theme: {
      bg: "#28203a",
      bgSecondary: "#1e1830",
      text: "#e4d8f0",
      textSecondary: "#9a8ab8",
      accent: "#c490e8",
      border: "#3a3050",
      gradientFrom: "#1e1830",
      gradientTo: "#28203a",
    },
  },
];

export const defaultTheme: SongTheme = {
  bg: "#fafafa",
  bgSecondary: "#f0f0f0",
  text: "#1a1a1a",
  textSecondary: "#888888",
  accent: "#555555",
  border: "#e0e0e0",
  gradientFrom: "#f0f0f0",
  gradientTo: "#e5e5e5",
};
