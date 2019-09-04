import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import ResumePage from './pages/resume/resume-page.component';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';  
import FooterNav from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/resume' component={ResumePage} />
        <FooterNav />
      </Switch>
    </div>
  );
}

export default App;
