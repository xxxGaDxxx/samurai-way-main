import React from 'react';
import './App.css';
import {Heder} from './components/Header/Heder';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';


function App() {
    return (
        <div className="app-wrapper">
            <Heder/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
