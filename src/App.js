import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';  


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
