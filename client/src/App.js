import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';

function App() {
  const user = window.localStorage.getItem("userID");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={!user ? <Landing /> : <Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
