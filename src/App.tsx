import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Blogs from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/projects"    element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/blogs"       element={<Blogs />} />
        <Route path="/blogs/:id"   element={<BlogPostPage />} />
        <Route path="/events"      element={<Events />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;