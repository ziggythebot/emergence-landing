import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';
import SponsorAlt from './pages/SponsorAlt';
import Welcome from './pages/Welcome';
import Partners from './pages/Partners';
import VideoLibrary from './pages/VideoLibrary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/sponsor-alt" element={<SponsorAlt />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/video-library" element={<VideoLibrary />} />
      </Routes>
    </Router>
  );
}

export default App;
