import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import HeadManager from "./components/Seo/HeadManager";
import ScrollToTop from "./components/Seo/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Services from "./pages/Services";
import PersonalBanking from "./pages/PersonalBanking";
import Blogs from "./pages/Blog";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

// Heavier pages (markdown renderer, form libraries) load on demand.
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Layout>
      <HeadManager />
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
            <span className="loading loading-spinner loading-lg text-brand-coral" />
          </div>
        }
      >
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/about"            element={<About />} />
          <Route path="/projects"         element={<Projects />} />
          <Route path="/projects/:id"     element={<ProjectPage />} />
          <Route path="/services"         element={<Services />} />
          <Route path="/personal-banking" element={<PersonalBanking />} />
          <Route path="/blogs"            element={<Blogs />} />
          <Route path="/blogs/:id"        element={<BlogPostPage />} />
          <Route path="/events"           element={<Events />} />
          <Route path="/contact"          element={<Contact />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
