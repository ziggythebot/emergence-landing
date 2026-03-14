import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Host from './pages/Host';
import Sponsor from './pages/Sponsor';
import SponsorAlt from './pages/SponsorAlt';
import Welcome from './pages/Welcome';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/host" element={<Host />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/sponsor-alt" element={<SponsorAlt />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
