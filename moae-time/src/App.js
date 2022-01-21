import React from 'react';
import { HomePage, BoardPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/board" element={<BoardPage />} />
    </Routes>
  );
}

export default App;