import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return window.localStorage.getItem("myspace-theme") === "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    window.localStorage.setItem("myspace-theme", isLight ? "light" : "dark");
  }, [isLight]);

  function toggleTheme() {
    setIsLight((current) => !current);
  }

  return (
    <div className="app-shell">
      <Navbar isLight={isLight} onToggleTheme={toggleTheme} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
