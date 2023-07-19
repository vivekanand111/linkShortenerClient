import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShortenLinkForm from './pages/ShortenLinkForm';
import LinkRedirect from './pages/LinkRedirect';
import LinkExpired from './pages/LinkExpired';
import LinkNotFound from './pages/LinkNotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenLinkForm />} />
        <Route path="/:shortUrl" element={<LinkRedirect />} />
        <Route path="/expired" element={<LinkExpired />} />
        <Route path="/notfound" element={<LinkNotFound />} />
        <Route path="*" element={<LinkNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
