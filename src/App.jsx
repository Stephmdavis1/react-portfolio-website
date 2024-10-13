import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Navbar from "./components/TabNav/Navbar.jsx"
import Projects from './pages/Projects'
import SippersCoffeehouse from './pages/SippersCoffeehouse.jsx'
import InMotion from './pages/InMotion.jsx'
import StephanieMarieFitness from './pages/StephanieMarieFitness.jsx'
import WatchIt from './pages/WatchIt.jsx'





const App = () => {
    return (
        <BrowserRouter  basename="">
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/SippersCoffeehouse" element={<SippersCoffeehouse />} />
                <Route path="/InMotion" element={<InMotion />} />
                <Route path="/StephanieMarieFitness" element={<StephanieMarieFitness />} />
                <Route path="/WatchIt" element={<WatchIt />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;