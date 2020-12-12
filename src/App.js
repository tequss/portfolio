import React, { Component } from 'react';
import './App.css';
import Landing from './components/Pages/Landingpage';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/Pages/AboutMe';
import Footer from './components/Footer';
import ContactMe from './components/Pages/ContactMe';
import Projects from './components/Pages/Projects';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  {/* <Landing />
        <AboutMe />
        <Footer /> */}
                  <Route exact path='/' component={Landing} />
                  <Route path='/aboutme' component={AboutMe} />
                  <Route path='/projects' component={Projects} />
                  <Route path='/contactme' component={ContactMe} />
                  <Footer />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />

        </Router>

      </div>

    );
  }
}

export default App;
