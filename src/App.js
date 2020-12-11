import React, { Component } from 'react';
import './App.css';
import Landing from './components/Pages/Landingpage';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/Pages/AboutMe';
import Footer from './components/Footer';

class App extends Component {
  render() {
     return (
       <Router>
      <Navbar />
      <Switch>
      {/* <Landing />
      <AboutMe />
      <Footer /> */}
        <Route path='/' exact component={Landing} />
        <Route path='/aboutme' component={AboutMe} />
        <Footer />
      </Switch>
      </Router>
   
    
    
    );
  }
}

export default App;
