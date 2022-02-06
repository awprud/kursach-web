import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import React from "react";
import TopNavBar from "./components/TopNavBar";
import LandingPage from "./pages/LandingPage";
import MyOrdersPage from "./pages/MyOrdersPage";

function App() {

    return (
        <div>
            <BrowserRouter>
                <TopNavBar />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/my-orders" element={<MyOrdersPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
