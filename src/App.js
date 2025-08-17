import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import LandingPage from "./components/landingPage/LandingPage";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SpeedInsights/>
    </Layout>
  );
}

export default App;
