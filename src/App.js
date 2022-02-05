import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
      <div>
        <BrowserRouter>
          <TopNavBar/>
          <Routes>
            <Route path="/" element={<div/>}/>
            <Route path="/ask" element={<div/>}/>
            <Route path="/purchase/" element={<div/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
