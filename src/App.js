import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import ProbStatement from './components/ProbStatement';
import Idea from './components/Idea';
import Footer from './components/footer';
import HumidityModule from './components/HumidityModule';
import DataPage from './Pages/ViewData';
import HomePage from './Pages/Home';
import NoDataFound from './Data/NoData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div  style={{backgroundColor: "white"}}>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/ViewData" element={<DataPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
export default App;
