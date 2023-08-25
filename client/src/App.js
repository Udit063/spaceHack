import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Proposal from './pages/proposal/Proposal';
import Satellite from './pages/satellite/Satellite';

function App() {
  const user = window.localStorage.getItem("userID");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={!user ? <Landing /> : <Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/satellites" element={<Satellite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
