import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import { MyProvider } from './context';



const App = () => {
    const [name, setName] = useState("fadwa")
    return (
        <MyProvider>
            <Routes>
                <Route path="/" element={<Home name={name} setName={setName} />} />
                <Route path="/about/:index/:title" element={<About />} />
            </Routes>
        </MyProvider>
    );
};

export default App;