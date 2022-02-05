import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import TopNavBar from "./components/TopNavBar";
import LandingPage from "./pages/LandingPage";
import AuthService from "./services/AuthService";

function App() {


    return (
        <div>
            <BrowserRouter>
                <TopNavBar />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/ask" element={<div/>}/>
                    <Route path="/purchase/" element={<div/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
