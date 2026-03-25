import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import About from './pages/About';
import Contact from './pages/Contact';

import HPR from './pages/solutions/HPR';
import SnapREC from './pages/solutions/SnapREC';
import SnapCAT from './pages/solutions/SnapCAT';
import SnapCOPE from './pages/solutions/SnapCOPE';
import SnapIR from './pages/solutions/SnapIR';
import SnapVALUES from './pages/solutions/SnapVALUES';
import SelfEAudit from './pages/solutions/SelfEAudit';
import SnapALERT from './pages/solutions/SnapALERT';

import Dashboard from './pages/technology/Dashboard';
import Platform from './pages/technology/Platform';
import IRDashboard from './pages/technology/IRDashboard';
import Impairments from './pages/technology/Impairments';
import HotWork from './pages/technology/HotWork';

import CaseStudies from './pages/about/CaseStudies';
import OurTeam from './pages/about/OurTeam';
import Careers from './pages/about/Careers';
import Resources from './pages/about/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/hpr" element={<HPR />} />
      <Route path="/solutions/snaprec" element={<SnapREC />} />
      <Route path="/solutions/snapcat" element={<SnapCAT />} />
      <Route path="/solutions/snapcope" element={<SnapCOPE />} />
      <Route path="/solutions/snapir" element={<SnapIR />} />
      <Route path="/solutions/snapvalues" element={<SnapVALUES />} />
      <Route path="/solutions/self-e-audit" element={<SelfEAudit />} />
      <Route path="/solutions/snapalert" element={<SnapALERT />} />

      <Route path="/technology" element={<Technology />} />
      <Route path="/technology/dashboard" element={<Dashboard />} />
      <Route path="/technology/ir-dashboard" element={<IRDashboard />} />
      <Route path="/technology/impairments" element={<Impairments />} />
      <Route path="/technology/hotwork" element={<HotWork />} />
      <Route path="/technology/platform" element={<Platform />} />

      <Route path="/about" element={<About />} />
      <Route path="/about/case-studies" element={<CaseStudies />} />
      <Route path="/about/team" element={<OurTeam />} />
      <Route path="/about/careers" element={<Careers />} />
      <Route path="/about/resources" element={<Resources />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
