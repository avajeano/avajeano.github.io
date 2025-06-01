import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollRedirectHandler() {
  const location = useLocation();

  // handle redirect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      window.history.replaceState(null, "", redirect);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <ScrollRedirectHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;