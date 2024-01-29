import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/screens/home/Header/Header.jsx";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}/>

    </Routes>
  );
}

export default App;




