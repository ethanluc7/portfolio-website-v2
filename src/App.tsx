import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Experience />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
