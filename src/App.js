import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import SingUp from './components/SignUp';
import HomePage from './components/HomePage';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SingUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
