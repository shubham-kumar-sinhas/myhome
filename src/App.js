import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import "./App.css";
import "./Assets/css/Custom.css";
import Home from "./Containers/home/Home";
import Blog from "./Components/pages/Blog"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog/:id" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
