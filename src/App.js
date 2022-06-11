import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Landing from "./pages/Landing";
import About from './pages/About';
import TOC from './pages/TOC';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<TOC />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
