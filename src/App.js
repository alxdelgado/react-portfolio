import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './App.css';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

// Lazy Loading
const HomePage = lazy(() => import ('./pages/homepage/homepage.component'));
const ResumePage = lazy(() => import('./pages/resume/resume-page.component'));
const ProjectsPage = lazy(() => import('./pages/projects/projects.component'));
const NavBar = lazy(() => import('./components/nav-bar/nav-bar.component'));
const FooterNav = lazy(() => import('./components/footer/footer.component'));
const SideBar = lazy(() => import('./components/sidebar/sidebar.component'));



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
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <NavBar sideBarClickHandler={this.sideBarToggleClickHandler} closeSideBarHandler={this.closeSideBarClickHandler} />
              {Content}
              <Route exact path='/' component={HomePage} />
              <Route path='/resume' component={ResumePage} />
              <Route path='/projects' component={ProjectsPage} />
              <FooterNav />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

export default App;
