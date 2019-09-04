import React from 'react';
import { BrowserRouter as Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';  
import FooterNav from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar />
        <HomePage />
        <FooterNav />
      </Switch>
    </div>
  );
}

export default App;
