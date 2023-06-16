import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Scolaire from './pages/Scolaire';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Interface from './pages/Interface';
import Acceuil from './pages/Acceuil';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface />}>
          <Route path="portfolio" element={<Acceuil />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Scolaire" element={<Scolaire />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
