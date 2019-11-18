import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';

import ResumePage from './pages/resume/resume-page.component';
import NavBar from './components/nav-bar/nav-bar.component';
// import HomePage from './pages/homepage/homepage.component';
import ProjectsPage from './pages/projects/projects.component';   
import FooterNav from './components/footer/footer.component';
import SideBar from './components/sidebar/sidebar.component'; 


// Lazy Loading
const HomePage = lazy(() => import ('./pages/homepage/homepage.component'));

// Smart Component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sideBarOpen: false
    } 

  }

  // Handle Click method for our 'ToggleButton' component. 
  sideBarToggleClickHandler = () => {
    this.setState ((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    })
  }; 
  

  render() {
    const Content = this.state.sideBarOpen ? <SideBar /> : null;

    return (
      <div className="App" style={{height: '100%'}}>
        <Switch>
          <NavBar sideBarClickHandler={this.sideBarToggleClickHandler} closeSideBarHandler={this.closeSideBarClickHandler} />
          {Content}
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={HomePage} />
          </Suspense>
          <Route path='/resume' component={ResumePage} />
          <Route path='/projects' component={ProjectsPage} />
          <FooterNav />
        </Switch>
      </div>
    );
  }
}

export default App;
