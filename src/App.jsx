import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Skills from './pages/Skills';
import SkillDetails from './pages/SkillDetails';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* 
          ScrollToTop must sit inside BrowserRouter but outside Routes. 
          This ensures every time the URL changes, the window scrolls to (0,0).
      */}
      <ScrollToTop />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:title" element={<ProjectDetails />} />

        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/:category" element={<SkillDetails />} />

        <Route path="/certifications" element={<Certifications />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;