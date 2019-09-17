import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';

import ResumePage from './pages/resume/resume-page.component';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';  
import FooterNav from './components/footer/footer.component';
import SideBar from './components/sidebar/sidebar.component'; 
 



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sideBarOpen: false
    } 
  }

  sideBarToggleClickHandler = () => {
    this.setState ((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    })
  } 

  render() {
    let sideBar; 
    if (this.state.sideBarOpen) {
      sideBar = <SideBar />;
    }
    return (
      <div className="App" style={{height: '100%'}}>
        <Switch>
          <NavBar />
          {SideBar}
          <Route exact path='/' component={HomePage} />
          <Route path='/resume' component={ResumePage} />
          <FooterNav />
        </Switch>
      </div>
    );
  }
}

export default App;
