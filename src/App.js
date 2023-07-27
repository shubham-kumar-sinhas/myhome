import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Downloadppt from './Components/ppt/Downloadppt';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Downloadppt/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
